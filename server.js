const express = require('express');
const connectDB = require('./db');
const app = express();
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const indexRouter = require('./routes/index');
connectDB();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }));
app.set('views', __dirname + '/views');
app.set('layout', 'layout/layout');
app.use(expressLayouts);
app.use(express.static('public'));
const PORT = process.env.port || 5000;
app.use('/', indexRouter);
app.listen(PORT, () => console.log(`server started on port ${PORT}`));
