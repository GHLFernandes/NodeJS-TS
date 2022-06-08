"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const query_string_1 = require("query-string");
const url = __importStar(require("url"));
const fs_1 = require("fs");
const PORT = process.env.PORT || 3000;
const server = (0, http_1.createServer)((req, res) => {
    var _a, _b;
    const parsedUrl = url.parse(((_a = req.url) === null || _a === void 0 ? void 0 : _a.toString()) || '');
    const parsedQuery = (0, query_string_1.parse)(((_b = parsedUrl.query) === null || _b === void 0 ? void 0 : _b.toString()) || '');
    const path = parsedUrl.pathname;
    switch (path) {
        case '/':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('<h1>Home</h1>');
            break;
        case '/create-user':
            (0, fs_1.writeFile)(`data/users/user-${parsedQuery.id}.json`, JSON.stringify(parsedQuery), (err) => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'text/html' });
                    res.end('<h1>Error</h1>');
                    throw err;
                }
                else {
                    console.log('User created');
                }
            });
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('<h1>Create User</h1>');
            break;
        case '/update-user':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('<h1>Update User</h1>');
            break;
        case '/list-users':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(`<h1>User's List</h1>`);
            break;
        case '/delete-user':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('<h1>Delete User</h1>');
            break;
        default:
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>404 Not Found</h1>');
    }
});
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
