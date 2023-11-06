// const burgerButton = document.querySelector(".header__burger");
// const burgerMenu = document.querySelector(".nav");
// const profileBurger = document.querySelector(".profile__burgerInner");
// const profileMenu = document.querySelector(".profile__sidebar");

// burgerButton.addEventListener("click", () => {
// 	burgerMenu.classList.toggle("active");
// });

// profileBurger.addEventListener("click", () => {
// 	profileMenu.classList.toggle("active");
// });


const burgerButtons = document.querySelectorAll("div[data-burger]");
const burgerMenus = document.querySelectorAll("*[data-burgermenu]");

burgerButtons.forEach((btn)=>{
	btn.addEventListener("click", ()=>{
		burgerMenus.forEach((menu)=>{
			if(menu.dataset.burgermenu == btn.dataset.burger)
			{
				menu.classList.toggle("active");
			}
		});
	});
});

window.addEventListener("scroll", ()=>{
	burgerMenus.forEach((menu)=>{
		if(menu.dataset.burgermenu == "profile" && menu.classList.contains("active"))
		{
			menu.classList.remove("active");
		}
	});
});
