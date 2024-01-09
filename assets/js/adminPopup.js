const popup = document.querySelector(".popup__main");
const popupsAgreeButtons = document.querySelectorAll("a[data-access]");
const popupClose = document.querySelector(".popup__deleteBlock__buttons--cancel");

let stateAgreePopup = false;

popupsAgreeButtons.forEach((btn)=>{
	btn.addEventListener("click", (e)=>{
		console.log("click");
		e.preventDefault();
		if(!stateAgreePopup){
			showPopup(btn.getAttribute('href'));
		} else {
			closePopUp();
			showPopup(btn.getAttribute('href'));
		}
	});
});

popupClose.addEventListener("click", (e)=>{
	e.preventDefault();
	closePopUp();
});

function closePopUp(){
	popup.classList.remove("active");
	stateAgreePopup = false;
	document.body.style.overflowY = "auto";
}

function showPopup(attr){
	
	let agreeButton = document.querySelector('.popup__deleteBlock__buttons--delete');
	agreeButton.setAttribute('href', attr);

	popup.classList.add("active");
	stateAgreePopup = true;
	document.body.style.overflow = "hidden";
}