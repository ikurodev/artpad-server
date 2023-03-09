"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const v1_1 = __importDefault(require("./v1"));
const routerApi = (app) => {
    const APIRouter = express_1.default.Router();
    app.use('/api', APIRouter);
    (0, v1_1.default)(APIRouter);
    APIRouter.get('/', (req, res) => {
        console.log('/API ok');
    });
};
exports.default = routerApi;
