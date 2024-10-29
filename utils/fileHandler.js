const fs = require('fs');

exports.writeTasksToFil = (data) => {
    fs.writeFileSync('./../data/tasks.json', JSON.stringify(data));
    return data;
}

exports.readTasksFromFile = () => {
    if (!fs.existsSync('./../data/tasks.json')){
        this.writeTasksToFil([]);
    }
    const data = fs.readFileSync('./../data/tasks.json')

    return JSON.parse(data);

}