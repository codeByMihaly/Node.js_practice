const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('views'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
});

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
});

app.listen(8080, (error) => {
    if (error) {
        throw error;
    }
    console.log('Server is running!')
});