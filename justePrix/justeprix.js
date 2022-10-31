//Générer un chiffre en aléatoire
//L'utilisateur fera des propositions
//Continuer tant qu'il n'a pas la bonne proposition

let numberToFind = 0;
const resultDiv = document.getElementById("resultDiv");

document.getElementById("beginGame").addEventListener("click", function () {
  //Lancer la partie
  //Récuperer un chiffre aléatoire
  numberToFind = getRandomInt(1000);
});

document
  .getElementById("userPropalButton")
  .addEventListener("click", function () {
    checkPropal();
  });

document
  .getElementById("userPropalInput")
  .addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      checkPropal();
    }
  });

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function checkPropal() {
  let numberPropal = document.getElementById("userPropalInput").value;
  if (numberToFind > numberPropal) {
    //C'est plus )
    resultDiv.innerHTML = "C'est plus ! ";
    let audio = new Audio("/justePrix/audios/plus.mp3");
    audio.play();
  } else if (numberToFind < numberPropal) {
    //C'est moins
    resultDiv.innerHTML = "C'est moins !";
    let audio = new Audio("/justePrix/audios/moins.mp3");
    audio.play();
  } else if (numberToFind == numberPropal) {
    //C'est gagné
    resultDiv.innerHTML = "C'est gagné !";
    let audio = new Audio("/justePrix/audios/Bip bip.mp3");
    audio.play();
  }
}
