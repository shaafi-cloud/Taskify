const http = require('http');
const taskRoutes = require('../routes/taskRoutes');

const port = 9000;
const HOSTNAME = "localhost";

const server = http.createServer((req, res) =>{
    if (req.url.startsWith('./tasks')) {
        //TODO: Implement
        taskRoutes(req, res)

    }else {
        res.writeHead(404, 'Not found', {'content-type': 'application/js'});
        res.end(JSON.stringify({
            message: 'Page not found'
        }))
    }
});

server.listen(port, HOSTNAME, () => {
    console.log(`server is running on port ${port}`)
})