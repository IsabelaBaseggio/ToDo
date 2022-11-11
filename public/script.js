const closeMessage = document.querySelector("#close-message");
const message = document.querySelector(".message");
const about = document.querySelector("#about");
const aboutClose = document.querySelector("#about-close");

closeMessage.addEventListener("click", () => {
  message.style.display = "none";
});

setTimeout(() => {
    message.style.display = "none";
}, 5000);

aboutClose.addEventListener("click", () => {

})