"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.get('/', function (resquest, response) {
    return response.json({ message: 'Hello World' });
});
app.listen(333, function () {
    console.log('🚀️ Server started on port 3333');
});
