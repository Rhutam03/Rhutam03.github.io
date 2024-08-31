from flask import Flask, render_template, request, jsonify
import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity

app = Flask(__name__)

# Load the movie and rating datasets
movies_df = pd.read_csv('https://s3-us-west-2.amazonaws.com/recommender-tutorial/ratings.csv') 
ratings_df = pd.read_csv('https://s3-us-west-2.amazonaws.com/recommender-tutorial/movies.csv') 

# Merge the datasets on movieId
movie_ratings = pd.merge(ratings_df, movies_df, on='movieId')

# Create a matrix where each row is a user and each column is a movie, with ratings as values
user_movie_matrix = movie_ratings.pivot_table(index='userId', columns='title', values='rating')

# Fill NaN values with 0
user_movie_matrix.fillna(0, inplace=True)

# Compute user-user cosine similarity matrix
user_similarity = cosine_similarity(user_movie_matrix)
user_similarity_df = pd.DataFrame(user_similarity, index=user_movie_matrix.index, columns=user_movie_matrix.index)

def get_recommendations(user_input_movie, num_recommendations=5):
    # Find users who rated the input movie
    users_who_rated_input_movie = user_movie_matrix[user_input_movie][user_movie_matrix[user_input_movie] > 0].index
    
    # Calculate weighted sum of ratings from similar users
    similar_users = user_similarity_df.loc[users_who_rated_input_movie].mean(axis=0)
    
    # Find movies the current user hasn't rated
    unrated_movies = user_movie_matrix.columns[user_movie_matrix.loc[users_who_rated_input_movie].mean(axis=0) == 0]
    
    # Recommend movies based on similar users' ratings
    recommended_movies = user_movie_matrix.loc[similar_users.idxmax()].drop(user_input_movie)
    recommended_movies = recommended_movies[unrated_movies].sort_values(ascending=False)
    
    return recommended_movies.head(num_recommendations).index.tolist()

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/recommend', methods=['POST'])
def recommend():
    user_input = request.json['user_input']
    
    try:
        recommended_movies = get_recommendations(user_input)
    except KeyError:
        recommended_movies = ["Movie not found. Please check the name and try again."]
    
    return jsonify({'movies': recommended_movies})

if __name__ == "__main__":
    app.run(debug=True)
