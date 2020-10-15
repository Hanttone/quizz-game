const bookmarkIcon = getAll(".questioncard__bookmarkicon");
const questionCard = getAll(".questioncard");
const pageHome = get('[data-view="home"]');
const pageBook = get('[data-view="bookmark"]');
const pageCreate = get('[data-view="create"]');
const pageProfile = get('[data-view="profile"]');
const homeButton = get(".footer__home");
const bookmarkButton = get(".footer__bookmark");
const createButton = get(".footer__create");
const profileButton = get(".footer__profile");

bookmarkIcon.forEach((icon) => {
    icon.addEventListener('click', () => 
    icon.classList.toggle("questioncard__chosen"))
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

homeButton.addEventListener('click', () => {
    pageHome.classList.remove("hidden");
    pageBook.classList.add("hidden");
    pageCreate.classList.add("hidden");
    pageProfile.classList.add("hidden");
    homeButton.classList.add("footer__chosen");
    bookmarkButton.classList.remove("footer__chosen");
    createButton.classList.remove("footer__chosen");
    profileButton.classList.remove("footer__chosen");

})

bookmarkButton.addEventListener('click', () => {
    pageHome.classList.add("hidden");
    pageBook.classList.remove("hidden");
    pageCreate.classList.add("hidden");
    pageProfile.classList.add("hidden");
    homeButton.classList.remove("footer__chosen");
    bookmarkButton.classList.add("footer__chosen");
    createButton.classList.remove("footer__chosen");
    profileButton.classList.remove("footer__chosen");
})

createButton.addEventListener('click', () => {
    pageHome.classList.add("hidden");
    pageBook.classList.add("hidden");
    pageCreate.classList.remove("hidden");
    pageProfile.classList.add("hidden");
    homeButton.classList.remove("footer__chosen");
    bookmarkButton.classList.remove("footer__chosen");
    createButton.classList.add("footer__chosen");
    profileButton.classList.remove("footer__chosen");
})

profileButton.addEventListener('click', () => {
    pageHome.classList.add("hidden");
    pageBook.classList.add("hidden");
    pageCreate.classList.add("hidden");
    pageProfile.classList.remove("hidden");
    homeButton.classList.add("footer__chosen")
    homeButton.classList.remove("footer__chosen");
    bookmarkButton.classList.remove("footer__chosen");
    createButton.classList.remove("footer__chosen");
    profileButton.classList.add("footer__chosen");
})

function getAll (selector) {
  return document.querySelectorAll(selector)
}

function get (selector) {
    return document.querySelector(selector)
}

