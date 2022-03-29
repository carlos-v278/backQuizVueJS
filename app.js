const express = require('express');
const globalRouter = require('./routes/global');
const blogRouter = require('./routes/blog');
const path = require('path');
const app = express();
app.use(express.static('public'));
//configuration 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/', globalRouter);
app.use('/blog', blogRouter);


const port = 3000;

app.listen(port, () => {
    console.log(`App listening at http: //localhost:${port}`)
});