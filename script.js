const games = [
    { title: "Super Mario Odyssey", score: 97, image: "gameBoxArts/mario-odyssey.webp" },
    { title: "Super Mario Galaxy", score: 97, image: "gameBoxArts/mario-galaxy.webp" },
    { title: "Super Mario Galaxy 2", score: 97, image: "gameBoxArts/mario-galaxy-2.webp" },
    { title: "Super Mario 3D World", score: 93, image: "gameBoxArts/mario-3d-world.webp" },
    { title: "Super Mario Bros. Wonder", score: 93, image: "gameBoxArts/mario-bros-wonder.webp" },
    { title: "Paper Mario", score: 93, image: "gameBoxArts/paper-mario.webp" },
    { title: "Mario Kart 8 Deluxe", score: 92, image: "gameBoxArts/mario-kart-8-deluxe.webp" },
    { title: "Mario & Luigi: Superstar Saga", score: 90, image: "gameBoxArts/mario-luigi-superstar-saga.webp" },
    { title: "New Super Mario Bros.", score: 89, image: "gameBoxArts/new-super-mario-bros.webp" },
    { title: "Super Mario 3D World + Bowser's Fury", score: 89, image: "gameBoxArts/mario-3d-world-bowsers-fury.webp" },
    { title: "Mario Kart DS", score: 91, image: "gameBoxArts/mario-kart-ds.webp" },
    { title: "Mario Kart 8", score: 88, image: "gameBoxArts/mario-kart-8.webp" },
    { title: "Super Mario Maker", score: 88, image: "gameBoxArts/mario-maker.webp" },
    { title: "New Super Mario Bros. Wii", score: 87, image: "gameBoxArts/new-super-mario-bros-wii.jpg" },
    { title: "Paper Mario: The Thousand-Year Door", score: 87, image: "gameBoxArts/paper-mario-thousand-year-door.webp" },
    { title: "Super Mario Maker 2", score: 85, image: "gameBoxArts/mario-maker-2.webp" },
    { title: "New Super Mario Bros. U", score: 85, image: "gameBoxArts/new-super-mario-bros-u.webp" },
    { title: "Mario Kart 7", score: 85, image: "gameBoxArts/mario-kart-7.webp" },
    { title: "Luigi's Mansion 3", score: 86, image: "gameBoxArts/luigis-mansion-3.webp" },
    { title: "Mario + Rabbids Kingdom Battle", score: 84, image: "gameBoxArts/mario-rabbids-kingdom-battle.webp" },
    { title: "Super Paper Mario", score: 83, image: "gameBoxArts/super-paper-mario.webp" },
    { title: "Mario Kart Wii", score: 82, image: "gameBoxArts/mario-kart-wii.webp" },
    { title: "New Super Mario Bros. 2", score: 78, image: "gameBoxArts/new-super-mario-bros-2.webp" },
    { title: "Mario Tennis Aces", score: 75, image: "gameBoxArts/mario-tennis-aces.webp" },
    { title: "Super Mario Party", score: 71, image: "gameBoxArts/mario-party.webp" },
];

function pickGame(){
    const index = Math.floor(Math.random() * games.length);
    return games[index]
}
function putGameOnScreen(){
    document.getElementById("game-title").textContent = game1.title;
    document.getElementById("score").textContent = game1.score;
    document.getElementById("game-image").src = game1.image
    document.getElementById("game-title-2").textContent = game2.title;
    document.getElementById("score-2").textContent = "?";
    document.getElementById("game-image-2").src = game2.image;
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

