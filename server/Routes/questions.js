"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const questions_1 = require("../Controller/questions");
const questionsRouter = express_1.default.Router();
questionsRouter.get('/', questions_1.getQuestions);
exports.default = questionsRouter;
