const questionsSection = document.getElementById('questions-section');
const questionsBlock = document.getElementById('questions-block');
const submitButton = document.getElementById('submit-btn');
const skipButton = document.getElementById('skip-btn');

const fetchQuestions = async () => { 
    const response = await fetch('https://opentdb.com/api.php?amount=10');
    const data = await response.json();
    return data.results;
}