const closeMessage = document.querySelector("#close-message");
const message = document.querySelector(".message");
const about = document.querySelector("#about");
const arrow = document.querySelector(".arrow");
const arrowMood = document.querySelector(".arrowMood");
const contacts = document.querySelector(".contacts");

if (closeMessage) {
  closeMessage.addEventListener("click", () => {
    message.style.display = "none";
  });

  setTimeout(() => {
    message.style.display = "none";
  }, 5000);
}

console.log(about)
console.log(arrow)
console.log(arrowMood)
console.log(contacts)

if (arrow) {
  arrow.addEventListener("click", () => {
    about.classList.toggle("active");
    arrow.classList.toggle("active");
    arrowMood.classList.toggle("active");
    contacts.classList.toggle("active");
  });
}
