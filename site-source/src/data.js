export const projects = [
  {
    when: '2023–2024',
    context: 'Training and internship projects',
    title: 'SQL Analysis & Business Intelligence',
    bullets: [
      'Designed MySQL schemas and wrote analysis queries for sample financial, airline, retail, and ride-sharing datasets.',
      'Built Power BI dashboards for sales and banking data, and a Tableau dashboard exploring airport traffic.',
      'Organized SQL scripts, dashboard files, and dataset notes into a public collection of case studies.',
    ],
    kit: 'SQL · MySQL · Power BI · Tableau',
    links: [
      { label: 'SQL projects', href: 'https://github.com/Rhutam03/Gamaka-AI/tree/main/sql' },
      { label: 'Dashboards', href: 'https://github.com/Rhutam03/Gamaka-AI/tree/main/business-intelligence' },
    ],
  },
  {
    when: 'Apr 2026',
    context: 'Coursework project',
    title: 'Hospital Readmission Modeling with PySpark',
    bullets: [
      'Prepared a hospital readmission dataset with 12,465 records and explored data quality and distributions using Spark SQL.',
      'Built a Spark ML pipeline with categorical encoding, feature assembly, and a Random Forest classifier.',
      'Recorded classification metrics and a confusion matrix. The repository also contains a separate Neo4j graph import exercise using plant-domain data.',
    ],
    kit: 'Python · PySpark · Spark SQL · Spark ML',
    links: [{ label: 'Notebook and code', href: 'https://github.com/Rhutam03/Spark-and-Graph-Database' }],
  },
  {
    when: 'Dec 2025–Mar 2026',
    context: 'Personal project',
    title: 'Multimodal Medical Triage Prototype',
    bullets: [
      'Built a PyTorch classifier combining skin lesion images with text derived from dataset metadata, using ResNet-18 and learned text embeddings.',
      'Implemented a FastAPI inference service and a React/TypeScript interface, with Docker packaging and GitHub Actions workflows for AWS deployment.',
      'This educational prototype explores image and metadata classification; it has not been clinically validated.',
    ],
    kit: 'PyTorch · FastAPI · React · TypeScript · Docker · AWS',
    links: [{ label: 'Model and application code', href: 'https://github.com/Rhutam03/multimodal-medical-triage-hf' }],
  },
  {
    when: 'Aug 2024–May 2025',
    context: 'Undergraduate team project',
    title: 'Plant Disease Classification with Few-Shot Learning',
    bullets: [
      'Developed the few-shot learning pipeline using PyTorch, EfficientNet-B0 embeddings, and prototypical networks.',
      'Implemented episodic training for plant and disease tasks and contributed the model backend for a Flask image-upload application.',
      'Coauthored the project paper published in the International Journal of Research and Analytical Reviews in May 2025.',
    ],
    kit: 'Python · PyTorch · EfficientNet-B0 · Prototypical Networks · Flask',
    links: [
      { label: 'Project code', href: 'https://github.com/Rhutam03/Plant-Leaf-Disease-Multilevel-classification-using-few-shot-learning' },
      { label: 'Read paper', href: 'https://ijrar.org/papers/IJRAR25B2848.pdf' },
    ],
  },
  {
    when: 'Live website',
    context: 'Additional engineering project',
    title: 'Abhyut Engineering Website',
    bullets: [
      'Built an Astro website with responsive navigation for engineering products, industry pages, galleries, and downloadable catalogues.',
      'Defined product, catalogue, and gallery content schemas, and implemented an enquiry form interface with browser input validation and loading, success, and error states.',
    ],
    kit: 'Astro · React · TypeScript · Zod',
    links: [{ label: 'Visit website', href: 'https://www.abhyut.com/' }],
  },
  {
    when: 'Apr 2026',
    context: 'Personal project',
    title: 'Agent Workflows with MCP and Retrieval',
    bullets: [
      'Explored agent workflows that combine tool calls, retrieval, memory, and evaluator feedback through a custom FastMCP server.',
      'Built a retrieval-based chatbot using ChromaDB, OpenAI generation, and Gemini-based evaluation.',
    ],
    kit: 'OpenAI Agents SDK · MCP / FastMCP · LangChain · LangGraph · ChromaDB',
    links: [],
  },
]

export const experience = [
  {
    when: 'Feb 2024–Mar 2024 · Remote',
    role: 'AI/ML Intern, InternPe',
    bullets: [
      'Completed four machine learning projects covering diabetes classification, used-car price prediction, IPL win prediction, and breast cancer classification.',
      'Prepared tabular data and compared classification and regression models using Python, scikit-learn, and TensorFlow/Keras.',
      'Documented preprocessing and evaluation choices in notebooks and built Streamlit application code for selected projects.',
    ],
    links: [{ label: 'Project portfolio', href: 'https://github.com/Rhutam03/InternPe' }],
  },
  {
    when: 'Dec 2023–Mar 2024 · Pune, India',
    role: 'Junior Data Scientist Intern, Gamaka AI',
    bullets: [
      'Checked structured datasets for missing values, duplicates, inconsistent categories, and unusual values using SQL.',
      'Designed relational schemas and wrote financial analysis queries covering revenue, expenses, profit, and earnings per share.',
      'Completed Power BI and Tableau dashboard projects using sales, banking, and airport traffic datasets.',
    ],
    links: [{ label: 'SQL and data projects', href: 'https://github.com/Rhutam03/Gamaka-AI' }],
  },
]

export const skills = [
  { label: 'Data analysis', items: ['Python', 'SQL', 'R', 'pandas', 'NumPy', 'Power BI', 'Tableau'].map((name) => [name]) },
  { label: 'Machine learning', items: ['scikit-learn', 'PyTorch', 'TensorFlow / Keras', 'Computer vision', 'Few-shot learning', 'Multimodal learning', 'Time series'].map((name) => [name]) },
  { label: 'Pipelines & applications', items: ['PySpark', 'MySQL', 'Neo4j', 'FastAPI', 'Flask', 'Docker', 'Git', 'GitHub Actions', 'AWS ECR, S3 & App Runner'].map((name) => [name]) },
  { label: 'LLM project tools', items: ['OpenAI Agents SDK', 'MCP / FastMCP', 'LangChain', 'LangGraph', 'ChromaDB'].map((name) => [name]) },
]

export const education = [
  { when: 'Aug 2025–May 2027 · College Park, MD', title: 'M.S. in Data Science, University of Maryland, College Park', note: 'GPA 3.95/4.0. Graduating May 2027.' },
  { when: 'Dec 2021–Jun 2025 · Pune, India', title: 'B.E. in Computer Engineering, Savitribai Phule Pune University', note: 'Honors in Data Science. GPA 8.5/10.' },
]
