"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./db"));
dotenv_1.default.config();
const port = process.env.PORT;
const app = (0, express_1.default)();
// Define routes
app.get('/', (req, res) => {
    res.send('Quiz app route');
});
// Start server
app.listen(port, () => {
    console.log(`[Server]: Server running at port ${port}`);
});
// Establish database connection
(0, db_1.default)()
    .then(() => {
    console.log('Connected to database');
})
    .catch((error) => {
    console.error('Error connecting to database:', error);
    process.exit(1); // Exit the process if database connection fails
});
