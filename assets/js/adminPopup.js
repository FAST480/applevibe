const popupAgree = document.querySelector(".popup__delete");
const popupsAgreeButtons = document.querySelectorAll("a[data-access]");
const popupOpenButtons = document.querySelectorAll("a[data-popup]");
const popupClose = document.querySelector(".popup__deleteBlock__buttons--cancel");
const popupCancelButtons = document.querySelectorAll(".popup__main__cancelButton");
const popups = document.querySelectorAll(".popup__main");

let stateAgreePopup = false;

popupsAgreeButtons.forEach((btn)=>{
	btn.addEventListener("click", (e)=>{
		console.log("click");
		e.preventDefault();
		if(!stateAgreePopup){
			showAgreePopup(btn.getAttribute('href'));
		} else {
			closeAllPopups();
			showAgreePopup(btn.getAttribute('href'));
		}
	});
});

popupClose.addEventListener("click", (e)=>{
	e.preventDefault();
	closeAllPopups();
});

function showAgreePopup(attr){
	
	let agreeButton = document.querySelector('.popup__deleteBlock__buttons--delete');
	agreeButton.setAttribute('href', attr);

	popupAgree.classList.add("active");
	stateAgreePopup = true;
	document.body.style.overflow = "hidden";
}

function closeAllPopups()
{
	popups.forEach((popup)=>{
		popup.classList.remove("active");
	});
	stateAgreePopup = false;
	document.body.style.overflowY = "auto";
}


popupCancelButtons.forEach((btn)=>{
	btn.addEventListener("click", (e)=>{
		e.preventDefault();
		closeAllPopups();
	});
});
function showPopup(popupclass){
	
	popups.forEach((popup)=>{
		if(popup.classList.contains(popupclass)){
			popup.classList.add("active");
			stateAgreePopup = true;
			document.body.style.overflow = "hidden";
		}

	});
}

popupOpenButtons.forEach((btn)=>{

	btn.addEventListener("click", (e)=>{
		e.preventDefault();
		if(!stateAgreePopup){
			showPopup(btn.dataset.popup);
		} else {
			closeAllPopUp();
			showPopup(btn.dataset.popup);
		}
	});

});

