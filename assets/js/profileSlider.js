const slider1 = document.getElementById('slider1');
if (slider1 != null) initializeSlider(slider1);

const slider2 = document.getElementById('slider2');
if (slider2 != null) initializeSlider(slider2);
function initializeSlider(slider) {
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const SCROLL_SPEED = 1;
    const walk = (x - startX) * SCROLL_SPEED;
    slider.scrollLeft = scrollLeft - walk;
  });
}

document.addEventListener('DOMContentLoaded', function () {
  // Получаем ссылки на блок и кнопки
  var savehide = document.getElementById('savehide');
  var cancelhide = document.getElementById('cancelhide');
  var showButton = document.getElementById('showButton');
  var change = document.getElementById('change');
  var box = document.getElementById('box');
  var passwordBox = document.getElementById('passwordBox');
  var changePasswordBox = document.getElementById('changePasswordBox');
  var changePassword = document.getElementById('changePassword');
  var cancelPasswordButton = document.getElementById('cancelPasswordButton');
  var buttonBox = document.getElementById('buttonBox');
  var buttonBox2 = document.getElementById('buttonBox2');
  var uploadResult = document.getElementById('upload');
  var uploadButton = document.getElementById('uploadButton');
  var textFile = document.getElementById('textFile');

  // Добавляем слушатель события на кнопку "Показать блок"
  if(uploadResult)
  {
    uploadResult.addEventListener('change', function () {
      uploadButton.style.display = 'block';
      textFile.innerText = 'Заменить файл';
    });
  }
  if(showButton)
  {
      showButton.addEventListener('click', function () {
      savehide.style.display = 'block';
      cancelhide.style.display = 'block';
      buttonBox.style.display = 'flex';
      change.style.display = 'none';
      changePasswordBox.style.display = 'block';
      box.style.border = "1px solid #FFB500";
      box.style.height = "130%";
    });
  }
  if(changePassword)
  {
    changePassword.addEventListener('click', function () {
      passwordBox.style.border = "1px solid #FFB500";
      passwordBox.style.height = "100%";
      passwordBox.style.display = 'flex';
      buttonBox2.style.display = 'flex';
      box.style.display = 'none';
    });
  }
  
  if(cancelhide)
  {
    cancelhide.addEventListener('click', function () {
      savehide.style.display = 'none';
      cancelhide.style.display = 'none';
      buttonBox.style.display = 'none';
      changePasswordBox.style.display = 'none';
      change.style.display = 'flex';
      box.style.border = "none";
      box.style.height = "100%";
    });
  }

  if(cancelPasswordButton)
  {
    cancelPasswordButton.addEventListener('click', function () {
      passwordBox.style.display = 'none';
      box.style.display = 'flex';
    });
  }
  
  
});

// document.addEventListener('DOMContentLoaded', function () {
//   var name = document.getElementById('name');
//   var originalValue = name.value; // Сохраняем оригинальное значение

//   var nick = document.getElementById('nick');
//   var originalValuenick = nick.value; // Сохраняем оригинальное значение

//   var email = document.getElementById('email');
//   var originalValueemail = email.value; // Сохраняем оригинальное значение

//   var password = document.getElementById('password');
//   var originalValuepassword = password.value; // Сохраняем оригинальное значение

//   var number = document.getElementById('number');
//   var originalValuenumber = number.value; // Сохраняем оригинальное значение

//   var saveButton = document.getElementById('saveButton');
//   var cancelButton = document.getElementById('cancelButton');

//   // Добавляем слушатели события click для кнопок
//   cancelButton.addEventListener('click', cancelChanges);

//   // Функция для отмены изменений
//   function cancelChanges() {
//     name.value = originalValue; // Восстанавливаем оригинальное значение
//     nick.value = originalValuenick; // Восстанавливаем оригинальное значение
//     email.value = originalValueemail; // Восстанавливаем оригинальное значение
//     password.value = originalValuepassword; // Восстанавливаем оригинальное значение
//     number.value = originalValuenumber; // Восстанавливаем оригинальное значение
//   }
// });

$(function () {
  function demoUpload() {
    var $uploadCrop;

    function readFile(input) {
      if (input.files && input.files[0]) {
        console.log('Read file');
        var reader = new FileReader();

        reader.onload = function (e) {
          $(".upload-demo").addClass("ready");
          $uploadCrop
            .croppie("bind", {
              url: e.target.result
            })
            .then(function () {
              console.log("jQuery bind complete");
            });
        };

        reader.readAsDataURL(input.files[0]);
      } else {
        swal("Sorry - you're browser doesn't support the FileReader API");
      }
    }

    $uploadCrop = $("#upload-demo").croppie({
      enableExif: true,
      viewport: {
        width: 150,
        height: 150,
        type: "square"
      },
      boundary: {
        width: 200,
        height: 200
      },
      showZoomer: false
    });
    $(".cr-image").attr("src", "/template/img/noneimg.jpg");
    $("#upload").on("change", function () {
      readFile(this);

      $("#upload-demo").css("display", "block");
    });
    $(".upload-result").on("click", function (ev) {

      $uploadCrop
        .croppie("result", {
          type: "canvas",
          size: "original"
        })
        .then(function (resp) {
          popupResult({
            src: resp
          });
        });
    });
  }
  demoUpload();
});

function popupResult(result) {
  $('#img-result').attr('src', result.src);
  $('#base64_img').attr('value', result.src);
}
