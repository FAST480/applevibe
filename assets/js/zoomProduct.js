// 1й код
const zoomContainers = document.querySelectorAll('.zoom__item');
const zoomImages = document.querySelectorAll('.zoom__image');

function applyFirstCode() {
  zoomContainers.forEach((zoomContainer, index) => {
    zoomContainer.addEventListener('mousemove', (e) => {
      const { left, top, width, height } = zoomContainer.getBoundingClientRect();
      const x = (e.clientX - left) / width * 100;
      const y = (e.clientY - top) / height * 100;

      zoomImages[index].style.transformOrigin = `${x}% ${y}%`;
      zoomImages[index].style.transform = 'scale(1.3)';
    });

    zoomContainer.addEventListener('mouseleave', () => {
      zoomImages[index].style.transform = 'scale(1)';
    });
  });
}

// 2й код

const pinchZoom = (imageElement) => {
  let imageElementScale = 1;

  let start = {};

  // Calculate distance between two fingers
  const distance = (event) => {
    return Math.hypot(event.touches[0].pageX - event.touches[1].pageX, event.touches[0].pageY - event.touches[1].pageY);
  };

  imageElement.addEventListener('touchstart', (event) => {
    // console.log('touchstart', event);
    if (event.touches.length === 2) {
      event.preventDefault(); // Prevent page scroll

      // Calculate where the fingers have started on the X and Y axis
      start.x = (event.touches[0].pageX + event.touches[1].pageX) / 2;
      start.y = (event.touches[0].pageY + event.touches[1].pageY) / 2;
      start.distance = distance(event);
    }
  });

  imageElement.addEventListener('touchmove', (event) => {
    // console.log('touchmove', event);
    if (event.touches.length === 2) {
      event.preventDefault(); // Prevent page scroll

      // Safari provides event.scale as two fingers move on the screen
      // For other browsers just calculate the scale manually
      let scale;
      if (event.scale) {
        scale = event.scale;
      } else {
        const deltaDistance = distance(event);
        scale = deltaDistance / start.distance;
      }
      imageElementScale = Math.min(Math.max(1, scale), 4);

      // Calculate how much the fingers have moved on the X and Y axis
      const deltaX = (((event.touches[0].pageX + event.touches[1].pageX) / 2) - start.x) * 2; // x2 for accelarated movement
      const deltaY = (((event.touches[0].pageY + event.touches[1].pageY) / 2) - start.y) * 2; // x2 for accelarated movement

      // Transform the image to make it grow and move with fingers
      const transform = `translate3d(${deltaX}px, ${deltaY}px, 0) scale(${imageElementScale})`;
      imageElement.style.transform = transform;
      imageElement.style.WebkitTransform = transform;
      imageElement.style.zIndex = "9999";
    }
  });

  imageElement.addEventListener('touchend', (event) => {
    // console.log('touchend', event);
    // Reset image to it's original format
    imageElement.style.transform = "";
    imageElement.style.WebkitTransform = "";
    imageElement.style.zIndex = "";
  });
}
document.querySelectorAll(".pz-Media img:not(.pz-Image)").forEach(element => {
  pinchZoom(element);
});




// Проверка ширины экрана и применение кода при необходимости
function checkScreenWidth() {
  var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  if (screenWidth > 620) {
    applyFirstCode();
  } 
}

// Применяем код при загрузке страницы
document.addEventListener('DOMContentLoaded', function () {
  checkScreenWidth();
});

// Применяем код при изменении размера окна браузера
window.addEventListener('resize', function () {
  checkScreenWidth();
});
