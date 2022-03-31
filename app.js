const express = require('express');
const cors = require('cors')
const quizRouter = require('./routes/quiz.js');
const app = express();
const port = 3000;

app.use(cors())
app.use('/', quizRouter);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});