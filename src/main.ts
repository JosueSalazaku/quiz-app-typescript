import axios from "axios";

const questionsSection = document.getElementById('questions-section');
const questionsBlock = document.getElementById('questions-block');
const submitButton = document.getElementById('submit-btn');
const skipButton = document.getElementById('skip-btn');

export const fetchQuestions = async () => { 
    const response = await axios.get('http://localhost:8080/api/questions');
    const data = await response.data;
    console.log(data);
    return data.results;
}

