import express from 'express';

const app= express();


app.get('/ping',(req, res) => {
    res.send('Pong')
});


export default app;