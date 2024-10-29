const { getTasks, createTasks, updateTasks, deleteTasks } = require("../controllers/tasksController")

const taskRoutes =(req, res) => {
    //TODO: define all routes
    if (req.method === 'GET'){
        getTasksks(req, res)
    } else if (req.method === 'POST'){
        createTasks(req, res)
    }else if (req.method === 'PATCH'){
        updateTasks(req, res)
    }else if (req.method === 'DELETE'){
       deleteTasks(req, res)
    }else {
        res.writeHead(404, 'Not found', {'content-type': 'application/js'});
        res.end(JSON.stringify({
            message: 'Page not found'
        }))
    }
}

module.exports = taskRoutes;