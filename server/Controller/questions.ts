import db from '../db';
import { Request, Response } from 'express';

export const getQuestions = async (req: Request, res: Response): Promise<void> => {
    let connection;
    try {
        connection = await db();
        const [questions] = await connection.query('SELECT * FROM questions');
        res.json(questions);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching Questions' });
    } finally {
        if (connection) {
            connection.end();
        }
    }
}
 