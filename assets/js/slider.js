const sliderScrollBlock = document.querySelector(".slider__scrollBlock");

const sliderItems = document.querySelectorAll(".slider__item");
const dotsBlock = document.querySelector(".dots__block");


let currentSlide = 0;



function getPosition(currentSlide){
	let itemWidth = document.querySelector(".slider__item").offsetWidth;
	return currentSlide*(-1)*itemWidth;
}

function disactivateAllDots()
{
	dotsItems.forEach((dot)=>{
		dot.classList.remove("active");
	});
}

function setDot(currentSlide){
	disactivateAllDots();
	dotsItems[currentSlide].classList.add("active");
}

function createSliderDots()
{
	for(let i = 1; i < sliderItems.length; i++)
	{
		let clone = document.querySelector(".dots__item").cloneNode(true);
		clone.classList.remove("active");
		dotsBlock.appendChild(clone);
	}
}


function nextSlide(){
	if(currentSlide < sliderItems.length - 1)
	{
		currentSlide++;
		sliderScrollBlock.style.transform = "translateX("+getPosition(currentSlide)+"px)";
		setDot(currentSlide);
	} else if(currentSlide == sliderItems.length - 1)
	{
		currentSlide = 0;
		sliderScrollBlock.style.transform = "translateX("+getPosition(currentSlide)+"px)";
		setDot(currentSlide);
	}
}
createSliderDots();
const dotsItems = document.querySelectorAll(".dots__item");
for(let i = 0; i < dotsItems.length; i++)
{
	dotsItems[i].addEventListener("click", ()=>{
		currentSlide = i;
		sliderScrollBlock.style.transform = "translateX("+getPosition(currentSlide)+"px)";
		setDot(currentSlide);
	});
}



if(sliderScrollBlock.dataset.auto == "true") {
	let sliderTimer = setInterval(nextSlide, 6000);
}
