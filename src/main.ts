import axios from 'axios';

const questionsSection = document.getElementById('questions-section') as HTMLElement;
const questionsBlock = document.getElementById('questions-block') as HTMLElement;
const submitButton = document.getElementById('submit-btn') as HTMLButtonElement;
const skipButton = document.getElementById('skip-btn') as HTMLButtonElement;



export const fetchQuestions = async () => { 
    try {
        const response = await axios.get('http://localhost:8080/api/questions');
        const data = response.data;
        console.log(data);
        return data;
    } catch (error) {
        console.error("Error fetching questions:", error);
    }   
}

const showQuestions = async () => {
    const questions = await fetchQuestions();
    
    try {
        questions.forEach((question: any) => {
            const questionDiv = document.createElement('div');

            const questionCheckbox = document.createElement('input');
            questionCheckbox.type = 'checkbox';
            questionDiv.appendChild(questionCheckbox);

            const questionsParagraph = document.createElement('p');
            questionsParagraph.textContent = question.question_text;
            questionDiv.appendChild(questionsParagraph);

            questionsBlock.appendChild(questionDiv);
        })
    } catch (error) {
        console.error("Error showing questions:", error);
    }
}

showQuestions()

submitButton.addEventListener('click', () => {
    console.log('Submit button clicked');
});

skipButton.addEventListener('click', () => {
    console.log('Skip button clicked');
});