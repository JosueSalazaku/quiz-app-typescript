import express from 'express'
import dotenv from 'dotenv'

dotenv.config();
const port = process.env.PORT;

const app = express()

app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
  
app.listen(port, () => {
    console.log(`[Server]: Server running at port ${port}`);
    
})