var retrieveScores = JSON.stringify(localStorage);
console.log(retrieveScores);

var playerScores = JSON.parse(retrieveScores);
console.log(playerScores.length);

// var playerScores = function () {
//         for (var i = 0; i < playerScores.length; i++) {
//             var players = document.createElement("h1");
//             players.className = "page-title";
//             players.textContent = playerScores[i].textContent;
//             console.log(players);
//             document.querySelector(".main-form").append(players);
//         }
//     };

// playerScores();