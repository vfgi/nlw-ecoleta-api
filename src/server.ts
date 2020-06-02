import express from 'express';

const app = express();

app.get('/users', (request, response) => {

    response.json([
        'Vitor',
        'Gabriel',
        'Cristiane'
    ])
})

app.listen(3333);