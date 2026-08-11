const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

app.get('/_next/image', (req, res) => {
    const url = req.query.url;
    if (url) {
        // Redirect to the original image URL locally
        res.redirect(url);
    } else {
        res.status(404).send('Not found');
    }
});

// Serve static files from the current directory (clone3)
app.use(express.static(__dirname));

app.listen(port, () => {
    console.log(`Server is running at http://127.0.0.1:${port}`);
});
