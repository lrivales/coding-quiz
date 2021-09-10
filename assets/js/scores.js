var retrievePlayerInfo = localStorage.getItem("player");
console.log(retrievePlayerInfo);

var player = JSON.parse(retrievePlayerInfo);
console.log(player.length);

var playerScore = function () {
        for (var i = 0; i < player.length; i++) {
            var playerInfo = document.createElement("h1");
            playerInfo.className = "page-title";
            playerInfo.textContent = player[i].initials + ": " + player[i].score;
            console.log(playerInfo);
            document.querySelector(".main-form").append(playerInfo);
        }
    };

playerScore();