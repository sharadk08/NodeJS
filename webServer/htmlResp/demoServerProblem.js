const http = require("http");
let server = http.createServer( (request, response) => {
    console.log("Request received");
    response.write("Welcome to Node!\n");
    response.write("<html><body>URL was: " + request.url + "</body></html>");
    response.write("\nHTML response not treated properly by browser.");
    response.end();
});
server.listen(3000);
console.log("Server is running at port 3000");
