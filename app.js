const express = require('express');
const app = express();
const PORT = 3000;

// Root route
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Lab 2 - Web Server</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                }
                .container {
                    background: white;
                    padding: 40px;
                    border-radius: 10px;
                    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
                    text-align: center;
                }
                h1 {
                    color: #333;
                    margin: 0;
                    font-size: 2em;
                }
                p {
                    color: #666;
                    font-size: 1.2em;
                    margin: 10px 0 0 0;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Aung Khant Paing</h1>
                <p>523k0072</p>
            </div>
        </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`✓ Server running on port ${PORT}`);
    console.log(`✓ Access it at: http://localhost:${PORT}`);
});