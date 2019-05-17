$(".phone_mask").mask("+7 (999) 999-99-999"); // Маска для телфона

// Модальное окно
$(document).ready(function () { 
    $('.button-callback').on('click', function () {
      $('#modal-callback').toggleClass('modal_visible');
    })
    $('.modal__close').on('click', function () {
      $('#modal-callback').toggleClass('modal_visible');
    })
  })

  $(document).ready(function(){
    $('.js-ajax').on('submit', function(){
        $.ajax({
            type: "POST",
            url: "php/send.php",
            data: $("#form1").serialize(),
            success: function(){
                
            }
            
        });
        $("#form1")[0].reset();
        return false;
    });
});

$(document).ready(function(){
    $('.js-ajax2').on('submit', function(){
        $.ajax({
            type: "POST",
            url: "php/send.php",
            data: $("#form2").serialize(),
            success: function(){
               
            }
        });
        $("#form2")[0].reset();
        return false;
    });
});

$(document).ready(function(){
    $('.js-ajax3').on('submit', function(){
        $.ajax({
            type: "POST",
            url: "php/send.php",
            data: $("#form3").serialize(),
            success: function(){
                
            }
        });
        $("#form3")[0].reset();
        return false;
    });
});

$(document).ready(function(){
    $('.js-ajax4').on('submit', function(){
        $.ajax({
            type: "POST",
            url: "php/send.php",
            data: $("#form4").serialize(),
            success: function(){
                
            }
        });
        $("#form4")[0].reset();
        return false;
    });
});

$(document).ready(function(){
    $('.js-ajaxModal').on('submit', function(){
        $.ajax({
            type: "POST",
            url: "php/send.php",
            data: $("#formModal").serialize(),
            success: function(){
                
            }
        });
        $("#formModal")[0].reset();
        return false;
    });
});
