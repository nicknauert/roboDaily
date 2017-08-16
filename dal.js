const data = require('./data');
const robots = data.users

function getBot(roboId){
  let chosenRobot = {};

  for(i=0; i<robots.length; i++){

    if(robots[i].id == roboId){
      chosenRobot = robots[i];
    }
  }
  return chosenRobot
}

module.exports = {
  getBot: getBot
}
