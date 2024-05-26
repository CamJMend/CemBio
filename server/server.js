// server/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/subscribe', (req, res) => {
    const email = req.body.email;
    // Guardar el correo electrónico en un archivo (o en una base de datos)
    fs.appendFile('subscribers.txt', `${email}\n`, (err) => {
        if (err) {
            console.error('Error saving email:', err);
            res.status(500).json({ message: 'Internal Server Error' });
        } else {
            res.status(200).json({ message: 'Subscription successful' });
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
