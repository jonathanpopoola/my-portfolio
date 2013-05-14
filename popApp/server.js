
var express = require('express'),
user = require('./routes/popRoutes');
 
var app = express();
 
app.configure(function () {
app.use(express.logger('dev')); /* 'default', 'short', 'tiny', 'dev' */
app.use(express.bodyParser());
});
 
app.get('/users', user.findAll);
app.post('/users', user.addUser);
//app.get('/wines/:id', wine.findById);
//app.post('/wines', wine.addWine);
//app.put('/wines/:id', wine.updateWine);
//app.delete('/wines/:id', wine.deleteWine);
 
app.listen(3000);
console.log('Listening on port 3000...');