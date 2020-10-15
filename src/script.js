const bookmarkIcon = getAll(".questioncard__bookmarkicon");
const questionCard = getAll(".questioncard");

bookmarkIcon.forEach((icon) => {
    icon.addEventListener('click', () => 
    icon.classList.toggle("questioncard__bookmarkicon--chosen"))
});

questionCard.forEach(addToggleLogic)

function addToggleLogic (card) {
  const button = card.querySelector('.questioncard__solution')
  const answerShow = card.querySelector('.questioncard__answertext')
  button.addEventListener('click', () => {
      answerShow.classList.toggle("hidden");
      if (button.innerHTML === "Show Answer") {
          button.innerHTML = "Minimize Answer";
      } else {
          button.innerHTML = "Show Answer"
      }
});
}

function getAll (selector) {
  return document.querySelectorAll(selector)
}

