const newsBlock = document.querySelector(".newsMain__list");
const newsItems = document.querySelectorAll(".newsMain__item");


const paginatorBlock = document.querySelector(".newsMain__paginator");
const paginatorItem = document.querySelector(".newsMain__paginator__item");


const maxOnPage = 3;
let currentPage = 1;
let blockHeight = (newsItems[0].offsetHeight+50)*maxOnPage;

function startPaginator()
{
	createPaginatorItems();
	newsBlock.style.maxHeight = blockHeight + "px"
	newsBlock.style.transform = "translateY(0px)";
}


function getPosition(page)
{
	return (page-1)*blockHeight;
}

function toPage(page)
{

	newsBlock.style.transform = "translateY(-"+getPosition(page)+"px)";

	currentPage = page;

	const topOffset = document.querySelector('.header').offsetHeight;
    const elementPosition = newsBlock.parentNode.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
    });

	setActivePaginatorItem();
}



function createPaginatorItems()
{
	let pages = Math.ceil(newsItems.length / maxOnPage);
	if(pages > 1)
	{
		for(let i = 1; i < pages; i++)
		{
			let clone = paginatorItem.cloneNode(true);
			clone.textContent = i+1;
			clone.classList.remove("active");
			paginatorBlock.appendChild(clone);
		}
	}
}

startPaginator();


const paginatorItems = document.querySelectorAll(".newsMain__paginator__item");
paginatorItems.forEach((item)=>{
	item.addEventListener("click", (e)=>{
		e.preventDefault();

		let page = item.textContent;
		if(page != currentPage) toPage(page);
		
	});
});

function setActivePaginatorItem()
{
	paginatorItems.forEach((item)=>{

		item.classList.remove("active");

	});

	paginatorItems[currentPage-1].classList.add("active");
}

