let totalSeconds;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (isNaN(choice.value)) {
    alert("Veuillez entrer un chiffre");
  } else {
    totalSeconds = choice.value * 60;
    choice.value = "";
    setInterval(countDown, 1000);
  }
});
