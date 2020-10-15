const bookmarkIcon = document.querySelectorAll(".questioncard__bookmarkicon");
const answerButtonShow = document.querySelectorAll(".questioncard__solution");
const answerShow = document.querySelector(".questioncard__answer");

bookmarkIcon.forEach((icon) => {
    icon.addEventListener('click', () => 
    icon.classList.toggle("questioncard__bookmarkicon--chosen"))
});
answerButtonShow.forEach((button) => {
    button.addEventListener('click', () => 
    answerShow.classList.toggle("questioncard__answer--show"))
});