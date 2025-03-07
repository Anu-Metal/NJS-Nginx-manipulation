const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log(`Received request: ${req.method} ${req.url} Headers: ${JSON.stringify(req.headers)}`);
    next();
});

app.get('/api/v1', (req, res) => {
    console.log('Responding to /api/v1');
    res.json({ value: 10 });
});

app.get('/api', (req, res) => {
    console.log('Responding to /api');
    res.json({ value: 1 });
});

app.get('/api/v1/1', (req, res) => {
    console.log('Responding to /api/v1/1');
    res.json({ value: 100 });
});
app.get('/api/v1/2', (req, res) => {
    console.log('Responding to /api/v1/2');
    res.json({ value: 200 });
});
app.get('/api/v1/3', (req, res) => {
    console.log('Responding to /api/v1/3');
    res.json({ value: 300 });
});

app.listen(3050, '0.0.0.0', () => {
    console.log('API server running on port 3050');
});
