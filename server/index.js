// set up a express server
const express = require('express');
const app = express();
const port = 3001; // Or any port you prefer
const cors = require('cors');


const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

// First: CORS middleware ##########

// Enable CORS with multiple origins
app.use(cors({
    // Your React app's URL, allows requests from React app
    origin: ['https://www.advantageai.site',
            'https://vercel-deployment-client-bm88ldwom-jacksons-projects-75570fff.vercel.app', // remove all trailing slashes(/) from URLS
            'https://vercel-deployment-client-nine.vercel.app', // Add all variations of my frontend URL
            'http://localhost:3000' // Keep local development working
    ],
    methods: ['POST'],  // better to Added OPTIONS for preflight requests
    allowedHeaders: ['Content-Type'],
}));

app.use(express.json()); // Middleware to parse JSON bodies


// Second: Register routes ##########

// Import chat routes for Google AI integration
const chatRoutes = require('./routes/chat');
// Register chat routes under /api prefix
// This will make the chat endpoint available at /api/chat
app.use('/api', chatRoutes);

// Route for mail delivery
const sgMail = require('@sendgrid/mail');
require('dotenv').config();

// It's highly recommended to store your API Key in an environment variable
const API_KEY = process.env.SENDGRID_API_KEY;
sgMail.setApiKey(API_KEY);





// app.use(path, handler): respond with ("Server is running") for any http request (get, post, put, etc) send to /
// app.use("/", (req, res) => {
//   res.send("Server is running.");
// });

// app.post(path, handler): This will only handle POST requests to /api/send-email (e.g., when a form is submitted or an API client sends data).
app.post('/api/send-email', async (req, res) => {
    const { to, fromName, fromEmail, subject, text, html } = req.body;

    if (!to || !fromEmail || !subject || (!text && !html)) {
        return res.status(400).json({ message: 'Missing required email fields' });
    }

    const message = {
        to: to,
        from: {
            name: fromName || 'Your App Name', // Default if not provided
            email: fromEmail, // This should be a verified sender in SendGrid
        },
        subject: subject,
        text: text,
        html: html,
        bcc: 'information@advantageai.site', // or any mailbox you want
    };

    try {
        await sgMail.send(message);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error.response ? error.response.body : error.message);
        res.status(500).json({ message: 'Error sending email', error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});