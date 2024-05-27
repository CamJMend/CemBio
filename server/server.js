const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const Subscriber = require('./models/Subscriber');

const app = express();
const port = 5000;

const dbURI = 'jjj';


// MongoDB Atlas
mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB Atlas');
});

app.use(cors());
app.use(bodyParser.json());

// Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
        user: 'jjj', 
        pass: 'jjj'
    }
});

app.post('/api/subscribe', async (req, res) => {
    const email = req.body.email;

    try {
        const newSubscriber = new Subscriber({ email });
        await newSubscriber.save();

        // Enviar correo de agradecimiento
        const mailOptions = {
            from: 'cembio.contact@gmail.com', // Reemplaza con tu correo
            to: email,
            subject: 'Thank you for subscribing!',
            text: 'Thank you for subscribing to our mailing list!'
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
            } else {
                console.log('Email sent:', info.response);
            }
        });

        res.status(200).json({ message: 'Subscription successful' });
    } catch (error) {
        console.error('Error saving email:', error);
        if (error.code === 11000) {
            res.status(400).json({ message: 'Email already subscribed' });
        } else {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
