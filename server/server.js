const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
//const { google } = require('google-auth-library');
const {google} = require('googleapis');
const Subscriber = require('./models/Subscriber');

const app = express();
const port = 5000;

const dbURI = 'mongodb+srv://camjmend:X1Aczu92AoIvk9Ci@cembio.5muwcgy.mongodb.net/?retryWrites=true&w=majority&appName=CemBio';

mongoose.connect(dbURI, {
    useNewUrlParser: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB Atlas');
});

app.use(cors());
app.use(bodyParser.json());

// Configuración OAuth2
const oAuth2Client = new google.auth.OAuth2(
    '95388885498-nhsa5iv863ohs0evnui46fvn0c6fi4dr.apps.googleusercontent.com',
    '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',
    'https://developers.google.com/oauthplayground'
);

oAuth2Client.setCredentials({ refresh_token: '1//043PqzjNlTj5xCgYIARAAGAQSNwF-L9IrcJj6BExhIe6InAr2lQ46FBebum5JWxyuMRQJG2YzB9z_6KbbwlLqXYfAwbr7M1i2xOE' });

async function sendEmail(email) {
    try {
        const accessToken = await oAuth2Client.getAccessToken();

        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: 'cembio.contact@gmail.com',
                clientId: '95388885498-nhsa5iv863ohs0evnui46fvn0c6fi4dr.apps.googleusercontent.com',
                clientSecret: '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',
                refreshToken: '1//043PqzjNlTj5xCgYIARAAGAQSNwF-L9IrcJj6BExhIe6InAr2lQ46FBebum5JWxyuMRQJG2YzB9z_6KbbwlLqXYfAwbr7M1i2xOE',
                accessToken: accessToken.token
            }
        });

        const mailOptions = {
            from: 'cembio.contact@gmail.com',
            to: email,
            subject: 'Subscription Successful',
            text: 'Thank you for subscribing to our newsletter!',
            html: '<h1>Thank you for subscribing to our newsletter!</h1>'
        };

        const result = await transport.sendMail(mailOptions);
        return result;
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Error sending email');
    }
}

app.post('/api/subscribe', async (req, res) => {
    const email = req.body.email;

    try {
        const newSubscriber = new Subscriber({ email });
        await newSubscriber.save();
        
        await sendEmail(email);

        res.status(200).json({ success: true, message: 'Subscription successful' });
    } catch (error) {
        console.error('Error saving email:', error);
        if (error.code === 11000) {
            res.status(400).json({ success: false, message: 'Email already subscribed' });
        } else {
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    }
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

