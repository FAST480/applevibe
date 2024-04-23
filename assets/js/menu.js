/* const burgerButton = document.querySelector(".header__burger");
const burgerMenu = document.querySelector(".nav");
const profileBurger = document.querySelector(".profile__burgerInner");
const profileMenu = document.querySelector(".profile__sidebar");

burgerButton.addEventListener("click", () => {
	burgerMenu.classList.toggle("active");
});

profileBurger.addEventListener("click", () => {
	profileMenu.classList.toggle("active");
}); */










const burgerButtons = document.querySelectorAll("div[data-burger]");
const burgerMenus = document.querySelectorAll("*[data-burgermenu]");

burgerButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        burgerMenus.forEach((menu) => {
            if (menu.dataset.burgermenu == btn.dataset.burger) {
                menu.classList.toggle("active");
            }
        });
    });
});

window.addEventListener("scroll", () => {
    burgerMenus.forEach((menu) => {
        if (menu.dataset.burgermenu == "profile" && menu.classList.contains("active")) {
            menu.classList.remove("active");
        }
        else if (menu.dataset.burgermenu == "adminindex" && menu.classList.contains("active")) {
            menu.classList.remove("active");
        }
    });

});


let activeMenu = null;

document.querySelectorAll('.dropdown-toggle').forEach(toggleElement => {
    toggleElement.addEventListener('click', clickEvent => {
        clickEvent.stopPropagation();

        const menu = clickEvent.currentTarget.dataset.path;
        const targetMenu = document.querySelector(`[data-target="${menu}"]`);

        if (activeMenu === null || activeMenu !== targetMenu) {
            // Закрываем предыдущее открытое меню
            if (activeMenu !== null) {
                activeMenu.classList.remove('menu-active');
                activeMenu.classList.remove('open');
            }

            // Открываем выбранное меню
            targetMenu.classList.add('menu-active');
            setTimeout(() => {
                targetMenu.classList.add('open');
            }, 0);

            // Обновляем активное меню
            activeMenu = targetMenu;
        } else {
            // Повторное нажатие на тот же самый элемент, закрываем меню
            setTimeout(() => {
                targetMenu.classList.remove('menu-active');
                targetMenu.classList.remove('open');
            }, 0);

            // Сбрасываем активное меню
            activeMenu = null;
        }
    });
});

// Обработчик события клика на любой элемент в документе
window.onclick = event => {
    const menuContainers = document.querySelectorAll('.dropdown-toggle, .dropdown-menu');

    for (const container of menuContainers) {
        if (container.contains(event.target)) {
            return;
        }
    }

    // Клик произошел вне контейнера, закрываем активное меню
    if (activeMenu !== null) {
        setTimeout(() => {
            activeMenu.classList.remove('menu-active');
            activeMenu.classList.remove('open');
            activeMenu = null;
        }, 0);
    }
};


document.addEventListener("DOMContentLoaded", function () {
    var movingBlock = document.querySelector('.header__nav__search');
    var container2 = document.querySelector('.header__nav');

    if (window.innerWidth <= 620) {
        container2.appendChild(movingBlock);
    }
});



document.addEventListener("DOMContentLoaded", function () {
    var movingBlock = document.querySelector('.header__nav__search');
    var container2 = document.querySelector('.header__nav__bg');
    var existingBlock = container2.querySelector('.header__nav__sort');

    if (window.innerWidth <= 620) {
        // Вставляем movingBlock перед existingBlock
        container2.insertBefore(movingBlock, existingBlock);
        // Или вставляем movingBlock после existingBlock
        // container2.insertBefore(movingBlock, existingBlock.nextSibling);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Функция для обновления margin на основе высоты блока
    function updateMargin() {
        var myBlock = document.querySelector('.header__box');
        var myBlock2 = document.querySelector('.shopMain');

        if (window.innerWidth <= 620) { 
            var blockHeight = myBlock.offsetHeight + 10; // Получаем высоту блока

            // Устанавливаем margin-top и margin-bottom равными высоте блока
            myBlock2.style.marginTop = blockHeight + 'px';
        } else {
            // Если ширина окна больше 620px, сбрасываем margin
            myBlock.style.marginTop = '0';
            myBlock.style.marginBottom = '0';
        }
    }

    // Вызываем функцию при загрузке страницы и изменении размеров окна
    window.addEventListener('resize', updateMargin);
    updateMargin(); // Вызываем сразу после загрузки страницы
});

/* document.addEventListener('DOMContentLoaded', function () {
    // Функция для обновления margin на основе высоты блока
    function updateMargin() {
        var myBlock = document.querySelector('.header__nav');
        var myBlock2 = document.querySelector('.shopMain');
        var blockHeight = myBlock.offsetHeight + 5; // Получаем высоту блока
        // Устанавливаем margin-top и margin-bottom равными высоте блока
        myBlock2.style.marginTop = blockHeight + 'px';
    }

    // Вызываем функцию при загрузке страницы и изменении размеров окна
    window.addEventListener('resize', updateMargin);
    updateMargin(); // Вызываем сразу после загрузки страницы
}); */



document.querySelectorAll('.count .plus').forEach(item => {

    item.addEventListener('click', function () {

        ++item.parentElement.querySelector('input').value;

        if (item.parentElement.querySelector('input').value > 1) {

            item.parentElement.querySelector('.minus').classList.remove('min');

        }

    });

});

document.querySelectorAll('.count .minus').forEach(item => {

    item.addEventListener('click', function () {

        --item.parentElement.querySelector('input').value;

        if (item.parentElement.querySelector('input').value < 2) {

            item.parentElement.querySelector('input').value = 1

            item.classList.add('min');

        }

    });

});



