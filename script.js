// Сіздің атыңызды осы жерге жазыңыз
const myName = "Асан Асанов";  // Өз атыңызбен ауыстырыңыз!

// DOM элементтерін алу
let entryInput = document.getElementById("entryinput");
let entryButton = document.getElementById("entrybutton");
let textOutput = document.getElementById("textoutput");

// Click оқиғасын тыңдау
entryButton.addEventListener("click", function() {
  // 1. Текс алаңынан мәтінді алу
  let message = entryInput.value;
  
  // 2. Alert көрсету (атыңызбен бірге)
  alert(myName + ": " + message);
  
  // 3. h2 ішіндегі мәтінді өзгерту (тек мәтін, атыңызсыз)
  textOutput.innerHTML = message;
});
