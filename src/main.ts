import { fetchQuestions } from './fetchQuestions';
import { fetchAnswers } from './fetchAnswers';

const questionsSection = document.getElementById('questions-section') as HTMLElement;
const questionsBlock = document.getElementById('questions-block') as HTMLElement;
const submitButton = document.getElementById('submit-btn') as HTMLButtonElement;
const skipButton = document.getElementById('skip-btn') as HTMLButtonElement;

let score = 0;


const showQuestions = async () => {
    const questions = await fetchQuestions();
    const answers = await fetchAnswers();
    
    try {
        const easyQuestions = questions.filter((question: any) => {
            return question.difficulty === 'Easy';
        });

        easyQuestions.forEach((question: any) => {
            const questionDiv = document.createElement('div');

            const questionCheckbox = document.createElement('p');
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

const checkAnswers = () => { 

}

submitButton.addEventListener('click', () => {
    console.log('Submit button clicked');
});

skipButton.addEventListener('click', () => {
    console.log('Skip button clicked');
});
 