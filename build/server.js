"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const src_1 = __importDefault(require("./src"));
const port = process.env.PORT || '3000';
src_1.default.listen(port, () => {
    console.log('server running');
});
