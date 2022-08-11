let totalSeconds;
let interval;

function countDown() {
  const minutes = Math.floor(totalSeconds / 60);
  // Le reste de seconde qui ne rentre pas dans les minutes
  const seconds = totalSeconds % 60;

  // est-ce que seconds est inférieur à 10 ? alors... sinon...
  const sec = seconds < 10 ? "0" + seconds : seconds;

  // affichage du compte à rebours, ajouter les variables
  countdownDisplay.textContent = `${minutes} : ${sec}`;
  // si totalSeconds est supérieur à 0, alors tu décrémentes
  if (totalSeconds > 0) {
    totalSeconds--;
  } else {
    countdownDisplay.textContent = "C'est terminé !";
    clearInterval(interval);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (isNaN(choice.value)) {
    alert("Veuillez entrer un chiffre");
  } else {
    totalSeconds = choice.value * 60;
    choice.value = "";
    clearInterval(interval);
    interval = setInterval(countDown, 1000);
  }
});
