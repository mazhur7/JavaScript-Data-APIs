const express = require('express');
const app = express();
app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

const database = [];


app.post('/api', (request, response) => {
    console.log('I got request!');
    console.log(request.body);
    const data = request.body;
    database.push(data);
    console.log(database);
    response.json(database);
    console.log(database);
});