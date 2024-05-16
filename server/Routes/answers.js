"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const answers_1 = require("../Controller/answers");
const answersRouter = express_1.default.Router();
answersRouter.get('/', answers_1.getAnswers);
exports.default = answersRouter;
