const burgerButton = document.querySelector(".header__burger");
const burgerMenu = document.querySelector(".nav");

burgerButton.addEventListener("click", () => {
	burgerMenu.classList.toggle("active");
});