const express = require('express');
const quizRouter = require('./routes/quiz.js');
const app = express();
const port = 3000;

app.use('/', quizRouter);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});