import express from 'express';
import { getQuestions } from '../Controller/questions';
const questionsRouter = express.Router();

questionsRouter.get('/', getQuestions);

export default questionsRouter;