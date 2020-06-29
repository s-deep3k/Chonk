var express= require('express');
var todoController= require('./controllers/todoController.js');
var app= express();

//for template engine
app.set('view engine','ejs');
//for static files
app.use(express.static('./public'));

//controller call
todoController(app);

//listen to a port
app.listen(4000);
console.log('Youre listening to port 4000');
