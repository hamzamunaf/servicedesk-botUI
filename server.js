var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 3000;
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, "views/layouts/")}));
app.set('view engine', 'handlebars');

app.get('/', function(req, res){
  res.status(200).render('bot');
  //console.log(PostData);
});

app.use(express.static('public'));

app.get('*', function (req, res){
  res.status(200).render('404');

})

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
