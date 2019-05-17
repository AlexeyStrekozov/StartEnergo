$(".phone_mask").mask("+7 (999) 999-99-99"); // Маска для телфона

// Модальное окно
$(document).ready(function () { 
    $('.button-callback').on('click', function () {
      $('#modal-callback').toggleClass('modal_visible');
    })
    $('.modal__close').on('click', function () {
      $('#modal-callback').toggleClass('modal_visible');
    })
  })

