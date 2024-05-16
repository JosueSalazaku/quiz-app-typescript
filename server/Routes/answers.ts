import express from 'express';
import { getAnswers } from '../Controller/answers';
const answersRouter = express.Router();

answersRouter.get('/', getAnswers);

export default answersRouter; 