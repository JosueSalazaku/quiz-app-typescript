import axios from "axios";

export const fetchAnswers = async () => { 
    try {
        const response = await axios.get('http://localhost:8080/api/answers');
        const data = response.data;
        return data;
    } catch (error) {
        console.error("Error fetching answers:", error);
    }   

}