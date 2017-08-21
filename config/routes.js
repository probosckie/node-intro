var home = require('../app/controllers/home');



//you can include all your controllers

module.exports = function (app, passport) {
  app.get('/main', home.main);
  app.get('/getData', home.getData);
 	app.post('/setData', home.setData);
 	
}
