import express, {Express, Request, Response} from 'express'
import dotenv from 'dotenv'
import connectToDatabase from './db';

dotenv.config();
const port = process.env.PORT;

const app = express()


// Define routes
app.get('/', (req: Request, res: Response) => {
    res.send('Quiz app route');
  });
  
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