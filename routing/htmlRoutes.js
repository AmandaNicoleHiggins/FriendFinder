var path = require("path");

// ROUTING

module.exports = function(app) {
   
// if the URL does not have an endpath, go to home page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  }); 
// if the URL ends with /survey, go to the survey page
  app.get("/survey", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/survey.html"));
});

}

module.exports = htmlRoutes;