import express, {Express, Request, Response} from 'express'
import dotenv from 'dotenv';
import connectToDatabase from './db';
import { getQuestions } from './Controller/questions'; 
import questionsRouter from './Routes/questions';
import answersRouter from './Routes/answers';

dotenv.config();
const port = process.env.PORT;
const app = express()

app.use('/api/questions', questionsRouter);
app.use('/api/answers', answersRouter);


  // Start server
  app.listen(port, () => {
    console.log(`[Server]: Server running at port ${port}`);
  });
  
  // Establish database connection
  connectToDatabase()
    .then(() => {
      console.log('Connected to database');
    })
    .catch((error) => {
      console.error('Error connecting to database:', error);
      process.exit(1); // Exit the process if database connection fails
    });