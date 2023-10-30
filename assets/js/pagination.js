const newsItems = document.querySelectorAll(".newsMain__item");


const paginatorBlock = document.querySelector(".newsMain__paginator");
const paginatorItem = document.querySelector(".newsMain__paginator__item");


const maxOnPage = 3;
let currentPage = 1;

function startPaginator()
{
	createPaginatorItems();
	hideAllNews();
	for(let i = 0; i < 3; i++)
	{
		newsItems[i].style.display = "flex";
	}
}

function hideAllNews()
{
	newsItems.forEach((item)=>{
		item.style.display = "none";
	});
}

function toPage(page)
{
	hideAllNews();
	
	let lastItem = maxOnPage*page-1;
	let firstItem = lastItem - maxOnPage + 1;

	for(let i = lastItem; i >= firstItem; i--)
	{
		newsItems[i].style.display = "flex";

	}

	currentPage = page;

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
		toPage(page);
	});
});

function setActivePaginatorItem()
{
	paginatorItems.forEach((item)=>{

		item.classList.remove("active");

	});

	paginatorItems[currentPage-1].classList.add("active");
}

