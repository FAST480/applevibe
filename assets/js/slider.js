const sliderScrollBlock = document.querySelector(".main__events__list");

const sliderItems = document.querySelectorAll(".main__events__item");
const dotsItems = document.querySelectorAll(".main__events__dots__item");

let currentSlide = 0;

let itemWidth = document.querySelector(".main__events__item").offsetWidth;

function getPosition(currentSlide){
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

for(let i = 0; i < dotsItems.length; i++)
{
	dotsItems[i].addEventListener("click", ()=>{
		currentSlide = i;
		sliderScrollBlock.style.transform = "translateX("+getPosition(currentSlide)+"px)";
		setDot(currentSlide);
	});
}


let sliderTimer = setInterval(nextSlide, 6000);