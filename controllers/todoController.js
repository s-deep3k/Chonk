var bodyparser = require('body-parser');
var data=[{item:'get milk'},{item:'play football'},{item:'walk my dog'}];
var urlencodedParser = bodyparser.urlencoded({extended:false});

module.exports = (app)=>{
    app.get('/todo',(req,res)=>{
        res.render('todo',{todos:data});
    })
    app.post('/todo',urlencodedParser,(req,res)=>{
        data.push(req.body);
        res.json(data);
    })
    app.delete('/todo/:item',(req,res)=>{
        data = data.filter((todo) => {
            return todo.item.replace(/ /g,'-') !== req.params.item ;
        });
        res.json(data);
    })
}