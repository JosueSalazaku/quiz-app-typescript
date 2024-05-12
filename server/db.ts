import mysql from 'mysql2/promise';
import dotenv from 'dotenv'

dotenv.config();

async function connectToDatabase() {
    try {
        const db = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            port: parseInt(process.env.DB_PORT || '3307')
        });

        console.log('Connected to quiz App database');
        
    } catch (error) {
        console.error('Error connecting to database:', error);
        throw error;
    }
}

export default connectToDatabase;