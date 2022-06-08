import { createServer, IncomingMessage, ServerResponse } from 'http';
import { parse }from 'query-string';
import * as url from 'url';
import { readFileSync, writeFile  } from 'fs';

const PORT = process.env.PORT || 3000;

const server = createServer((req: IncomingMessage, res: ServerResponse) => {

    const parsedUrl = url.parse(req.url?.toString() || '');
    const parsedQuery = parse(parsedUrl.query?.toString() || '');
    const path = parsedUrl.pathname;

    switch(path) {
        case '/':
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end('<h1>Home</h1>');
        break;

        case '/create-user':
            writeFile(`data/users/user-${parsedQuery.id}.json`, JSON.stringify(parsedQuery), (err:any) => {
                if(err) {
                    res.writeHead(500, {'Content-Type': 'text/html'});
                    res.end('<h1>Error</h1>');
                    throw err;
                }else{
                    console.log('User created');
                }
            });
        
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end('<h1>Create User</h1>');
        break;

        case '/update-user':
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end('<h1>Update User</h1>');
        break;

        case '/list-users':
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(`<h1>User's List</h1>`);
        break;

        case '/delete-user':
            res.writeHead(200, {'Content-Type': 'text/html'});
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