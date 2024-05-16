import express, {Express, Request, Response} from 'express'
import dotenv from 'dotenv';
import cors from 'cors';
import questionsRouter from './Routes/questions';
import answersRouter from './Routes/answers';

dotenv.config();
const port = process.env.PORT;
const app = express()

app.use(cors());

app.use('/api/questions', questionsRouter);
app.use('/api/answers', answersRouter);

app.listen(port, () => {
    console.log(`[Server]: Server running at port ${port}`);
});
