var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    todoRoutes = require('./routes/todos'),
    bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api/todos', todoRoutes);

app.get('/', function(req, res) {
    res.send('Hello from the root route!');
});

app.listen(port, function() {
    console.log('App is running!');
});