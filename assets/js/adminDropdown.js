const ddButtons = document.querySelectorAll("a[drop-down]");
const ddS = document.querySelectorAll(".dropdown-content");

let ddOpen = false;

ddButtons.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		e.preventDefault();
		let dd = btn.nextElementSibling;
		if(dd.classList.contains("active"))
		{
			closeAllDD();
		} else {
			if(ddOpen) closeAllDD();
			

			dd.classList.add("active");
			ddOpen = true;

			btn.classList.add("active");
		}

	});
});


function closeAllDD()
{
	ddS.forEach((dd) => {
		dd.classList.remove("active");
	});
	ddButtons.forEach((btn) => {
		btn.classList.remove("active");
	});
	ddOpen = false;
}