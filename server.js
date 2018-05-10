const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes');

const cacheTime = 86400000 * 7; // 7 days

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public', { maxAge: cacheTime }));
app.use(routes);

app.listen(process.env.PORT | 5000, () => {
    console.log(`Server running on port ${process.env.PORT | 5000}`);
});
