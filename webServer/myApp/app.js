const http = require('http');
const fs = require('fs');

let server = http.createServer((req, res) => {
    fs.readFile('./docs/display.txt', function(err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.write("File Not Found\n");
        } else {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.write(data);
        }
        res.end();
    });
});
server.listen(2080);
console.log("Server started... Running on localhost:2080");
