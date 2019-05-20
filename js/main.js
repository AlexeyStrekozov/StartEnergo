$(".phone_mask").mask(" +9 (999) 999-99-99"); // Маска для телфона

// Модальное окно
$(document).ready(function () { 
    $('.button-callback').on('click', function () {
      $('#modal-callback').toggleClass('modal_visible');
    })
    $('.modal__close').on('click', function () {
      $('#modal-callback').toggleClass('modal_visible');
    })
    $('#modal-thank').on('click', function () {
        $('#modal-thank').toggleClass('modal_visible');
      })
  })
  $(document).ready(function() {
    /*\
    var defaults = {
    containerID: 'toTop', // fading element id
    containerHoverID: 'toTopHover', // fading element hover id
    scrollSpeed: 1200,
    easingType: 'linear'
    };
    */
     
    $().UItoTop({ easingType: 'easeOutQuart' });
     
    });
    
  $(document).ready(function(){
    $('.js-ajax').on('submit', function(){
        $.ajax({
            type: "POST",
            url: "php/send.php",
            data: $("#form1").serialize(),
        }).done(function () {
            $("#modal-callback").removeClass("modal_visible");
            $("#modal-thank").addClass("modal_visible");
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
        }).done(function () {
            $("#modal-callback").removeClass("modal_visible");
            $("#modal-thank").addClass("modal_visible");
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
        }).done(function () {
            $("#modal-callback").removeClass("modal_visible");
            $("#modal-thank").addClass("modal_visible");
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
        }).done(function () {
            $("#modal-callback").removeClass("modal_visible");
            $("#modal-thank").addClass("modal_visible");
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
        }).done(function () {
            $("#modal-callback").removeClass("modal_visible");
            $("#modal-thank").addClass("modal_visible");
        });
        $("#formModal")[0].reset();
        return false;
    });
});
