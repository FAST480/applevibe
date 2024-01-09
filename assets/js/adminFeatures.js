const addButton = document.querySelector(".product__form__inputBlock__title__add");
const delButton = document.querySelector(".product__form__inputBlock__del");
const featuresItems = document.querySelectorAll(".product__form__inputBlock__item");
const featuresBlock = document.querySelector(".product__form__inputBlock--features");

var items = featuresItems.length;

addButton.addEventListener("click", addFeature);
delButton.addEventListener("click", delFeature);


function addFeature()
{
	items++;
	var obj = featuresItems[0].cloneNode(true);
	var featNameObj = obj.querySelector(".product__form__inputBlock__input--name");
	var featValueObj = obj.querySelector(".product__form__inputBlock__input--value");
	var featName = "featuresName" + items;
	var featValue = "featuresValue" + items;
	featNameObj.setAttribute("name", featName);
	featValueObj.setAttribute("name", featValue);
	featNameObj.value = "";
	featValueObj.value = "";
	
	featuresBlock.appendChild(obj);
	
}

function delFeature()
{
	if(items == 1)
	{
		return 0;
	}
	var obj = featuresBlock.lastElementChild;
	featuresBlock.removeChild(obj);
	items--;
}

const discountText = document.querySelector(".product__form__inputBlock--discount > .product__form__inputBlock__title");

const costWoSub = document.querySelector(".product__form__inputBlock__input--wosub");
const costSub = document.querySelector(".product__form__inputBlock--discount > .product__form__inputBlock__input");

costWoSub.addEventListener("input", setDiscount);
costSub.addEventListener("input", setDiscount);

function setDiscount()
{
	if(costWoSub.value != '' && costSub.value != '')
	{
		var discount = 100 - (costSub.value * 100) / costWoSub.value;
		discount = Math.round(discount);

		discountText.textContent = 'Цена №3 | Скидка по подписке: ' + discount + '%';
	}

	if(costWoSub.value == '' || costSub.value == '')
	{
		discountText.textContent = 'Цена №3 | Скидка по подписке: -';
	}
}

