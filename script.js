document.getElementById('recommendation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const userInput = document.getElementById('user-input').value;
    fetch('/recommend', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_input: userInput }),
    })
    .then(response => response.json())
    .then(data => {
        const recommendationList = document.getElementById('recommendation-list');
        recommendationList.innerHTML = '';
        data.movies.forEach(movie => {
            const li = document.createElement('li');
            li.textContent = movie;
            recommendationList.appendChild(li);
        });
    });
});
