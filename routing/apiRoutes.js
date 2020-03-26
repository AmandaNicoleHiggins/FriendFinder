var arrayOfFriends = require("../app/data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(arrayOfFriends);
  });


  app.post("/api/friends", function(req, res) {

    var thisFriend = req.body;
    var userScores = thisFriend.scores;

    var bestFriendName = "";
    var bestFriendPic = "";
    var totalDifference = 100;

    for (var i = 0; i < arrayOfFriends.length; i++) {
      var difference = 0;
      for (var j = 0; j < userScores.length; j++) {
        userScores[j] = parseInt(userScores[j]);
        difference += Math.abs(arrayOfFriends[i].scores[j] - userScores[j]);
      }

      if (difference < totalDifference) {
        totalDifference = difference;
        bestFriendName = arrayOfFriends[i].friendName;
        bestFriendPic = arrayOfFriends[i].friendImage;

        console.log(bestFriendName);
      }
    }


    arrayOfFriends.push(thisFriend);

    res.json({
      status: "OK",
      bestFriendName: bestFriendName,
      bestFriendPic: bestFriendPic
    });
  });
};