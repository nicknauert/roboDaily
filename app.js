const express = require('express');
const app = express();
const dataDal = require('./dal')
const mustache = require('mustache-Express');
const data = require('./data')

app.engine('mustache', mustache())
app.set('view engine', 'mustache')
app.set('views', __dirname + '/views')

app.use(express.static('public'));

app.get('/', function(req, res){
  res.render('index', {data: data})
})

app.get('/:id', function(req, res){
  const chosenRobot = dataDal.getBot(req.params.id);
  if (chosenRobot.id) {
    res.render('roboEntry', chosenRobot)
  } else {
    res.send("No Such Bot.")
  }
})


app.listen(3000, function(){
  console.log('Application running on 3000.')
})
