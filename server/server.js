"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./db"));
const questions_1 = __importDefault(require("./Routes/questions"));
const answers_1 = __importDefault(require("./Routes/answers"));
dotenv_1.default.config();
const port = process.env.PORT;
const app = (0, express_1.default)();
app.use('/api/questions', questions_1.default);
app.use('/api/answers', answers_1.default);
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
