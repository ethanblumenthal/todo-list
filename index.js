var express = require('express'),
    app = express(),
    todoRoutes = require('./routes/todos'),
    port = process.env.PORT || 3000;

app.get('/', function(req, res) {
    res.send('Hello from the root route!');
});

app.use('/api/todos', todoRoutes);

app.listen(port, function() {
    console.log('App is running!');
});