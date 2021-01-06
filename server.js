require('dotenv').config()
const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

const PORT = process.env.PORT || 80;
app.listen(PORT, function() {
    console.log(`Server started on port ${PORT}`)
});