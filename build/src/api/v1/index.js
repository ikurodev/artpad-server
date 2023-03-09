"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const V1RouterApi = (app) => {
    const V1Router = express_1.default.Router();
    app.use('/v1', V1Router);
    V1Router.get('/', (req, res) => {
        console.log('/v1 ok');
    });
};
exports.default = V1RouterApi;
