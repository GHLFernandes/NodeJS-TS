import { createServer, IncomingMessage, ServerResponse } from 'http';
import * as querystring from 'query-string';
import * as url from 'url';
import * as fs from 'fs';

const PORT = process.env.PORT || 3000;

const server = createServer((req: IncomingMessage, res: ServerResponse) => {

    res.end('Hello World!');

});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});