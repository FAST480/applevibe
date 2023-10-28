const popups = document.querySelectorAll(".popup");
const popupsButtons = document.querySelectorAll("a[data-popup]");
const popupsClose = document.querySelectorAll(".popup__close");

let state = false;

popupsButtons.forEach((btn)=>{
	btn.addEventListener("click", (e)=>{
		e.preventDefault();
		if(!state){
			showPopup(btn.dataset.popup);
		} else {
			closeAllPopUp();
			showPopup(btn.dataset.popup);
		}
	});
});

popupsClose.forEach((cls)=>{
	cls.addEventListener("click", ()=>{
		closeAllPopUp();
	});
});

function closeAllPopUp(){
	popups.forEach((popup)=>{
		popup.classList.remove("active");
		state = false;
	});
}

function showPopup(popupclass){
	
	popups.forEach((popup)=>{
		if(popup.classList.contains(popupclass)){
			popup.classList.add("active");
			state = true;
		}

	});
}