"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const PORT = process.env.PORT || 3000;
const server = (0, http_1.createServer)((req, res) => {
    res.end('Hello World!');
});
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
