const games = [
    { title: "Super Mario Odyssey", score: 97 },
    { title: "Super Mario Galaxy", score: 97 },
    { title: "Super Mario Galaxy 2", score: 97 },
    { title: "Super Mario 3D World", score: 93 },
    { title: "Super Mario Bros. Wonder", score: 93 },
    { title: "Paper Mario", score: 93 },
    { title: "Mario Kart 8 Deluxe", score: 92 },
    { title: "Mario & Luigi: Superstar Saga", score: 90 },
    { title: "New Super Mario Bros.", score: 89 },
    { title: "Super Mario 3D World + Bowser's Fury", score: 89 },
    { title: "Mario Kart DS", score: 91 },
    { title: "Mario Kart 8", score: 88 },
    { title: "Super Mario Maker", score: 88 },
    { title: "New Super Mario Bros. Wii", score: 87 },
    { title: "Paper Mario: The Thousand-Year Door", score: 87 },
    { title: "Super Mario Maker 2", score: 85 },
    { title: "New Super Mario Bros. U", score: 85 },
    { title: "Mario Kart 7", score: 85 },
    { title: "Luigi's Mansion 3", score: 86 },
    { title: "Mario + Rabbids Kingdom Battle", score: 84 },
    { title: "Super Paper Mario", score: 83 },
    { title: "Mario Kart Wii", score: 82 },
    { title: "New Super Mario Bros. 2", score: 78 },
    { title: "Mario Tennis Aces", score: 75 },
    { title: "Super Mario Party", score: 71 },
];

function pickGame(){
    const index = Math.floor(Math.random() * games.length);
    return games[index]
}
function putGameOnScreen(){
    document.getElementById("game-title").textContent = game1.title;
    document.getElementById("score").textContent = game1.score;
    document.getElementById("game-title-2").textContent = game2.title;
    document.getElementById("score-2").textContent = "?";
}

let currentStreak = 0
let game1 = pickGame();
let game2 = pickGame();
while(game1 == game2){
    game2 = pickGame();
}

putGameOnScreen();

document.querySelector(".higher-button").addEventListener("click", function(){
    document.getElementById("score-2").textContent = game2.score;
    if(game2.score >= game1.score) {
        console.log("Correct!");
        document.querySelector(".higher-button").disabled = true;
        document.querySelector(".lower-button").disabled = true;
        currentStreak++;
        document.getElementById("streak-count").textContent = currentStreak;
        document.getElementById("score-2").textContent = game2.score;
        setTimeout(function() {
        game1 = game2;
        game2 = pickGame();
        while(game1 == game2){
            game2 = pickGame();
        }
        putGameOnScreen();
        document.querySelector(".higher-button").disabled = false;
        document.querySelector(".lower-button").disabled = false;
        },1300);
    }
    else{
        alert("GAMEOVER! Final Streak: " + currentStreak)
        currentStreak = 0;
        document.getElementById("streak-count").textContent = currentStreak;
        game1 = pickGame();
        game2 = pickGame();
         while(game1 == game2){
            game2 = pickGame();
        }
        putGameOnScreen();
    }

});

document.querySelector(".lower-button").addEventListener("click", function(){
    document.getElementById("score-2").textContent = game2.score;
    if(game2.score <= game1.score) {
        console.log("CORRECT!");
        document.querySelector(".higher-button").disabled = true;
        document.querySelector(".lower-button").disabled = true;
        currentStreak++;
        document.getElementById("streak-count").textContent = currentStreak;
        document.getElementById("score-2").textContent = game2.score;
        setTimeout(function() {
        game1 = game2;
        game2 = pickGame();
        while(game1 == game2){
            game2 = pickGame();
        }
        putGameOnScreen();
        document.querySelector(".higher-button").disabled = false;
        document.querySelector(".lower-button").disabled = false;
        },1300);
    }
    else{
        alert("GAMEOVER! Final Streak: " + currentStreak)
        currentStreak = 0;
        document.getElementById("streak-count").textContent = currentStreak;
        game1 = pickGame();
        game2 = pickGame();
        while(game1 == game2){
            game2 = pickGame();
        }
        putGameOnScreen();
    }

});

