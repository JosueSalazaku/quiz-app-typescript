import axios from 'axios';

export const fetchQuestions = async () => { 
    try {
        const response = await axios.get('http://localhost:8080/api/questions');
        const data = response.data;
        return data;
    } catch (error) {
        console.error("Error fetching questions:", error);
    }   
}