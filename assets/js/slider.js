const sliderScrollBlock = document.querySelector(".main__events__list");

const sliderItems = document.querySelectorAll(".main__events__item");

let currentSlide = 0;

let itemWidth = document.querySelector(".main__events__item").offsetWidth;

function getPosition(){
	return currentSlide*(-1)*itemWidth;
}


function nextSlide(){
	if(currentSlide < sliderItems.length - 1)
	{
		currentSlide++;
		sliderScrollBlock.style.transform = "translateX("+getPosition()+"px)";
	} else if(currentSlide == sliderItems.length - 1)
	{
		currentSlide = 0;
		sliderScrollBlock.style.transform = "translateX("+getPosition()+"px)";
	}
}

let sliderTimer = setInterval(nextSlide, 6000);