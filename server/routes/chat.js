const express = require('express');
const router = express.Router();
// const { google } = require('@ai-sdk/google');
const { deepinfra } = require('@ai-sdk/deepinfra'); 
const { generateText } = require('ai');

router.post('/chat', async (req, res) => {
    try {
        const { messages } = req.body;
        
        const { response } = await generateText({
            model: deepinfra('mistralai/Mistral-7B-Instruct-v0.3'),  // Change this line
            messages,
            temperature: 0.7,
            maxTokens: 1500,
        });

        // const { response } = await generateText({
        //    model: google('gemini-2.0-flash'),
        //    messages,
        //    temperature: 0.7,
        //    maxTokens: 1500,
        //});

        res.json({ messages: response.messages });
    } catch (error) {
        console.error('Chat API error:', error);
        res.status(500).json({ error: 'Error processing chat request' });
    }
});

module.exports = router;