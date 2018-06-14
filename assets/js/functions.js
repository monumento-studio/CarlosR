/*
 Sticky-kit v1.1.2 | WTFPL | Leaf Corcoran 2015 | http://leafo.net
*/


$( document ).ready(function() {

  //menu hover
    $('.cat').mouseover(function(){
      $('.categorias').show();
    });
    $('.logo, .ab').mouseover(function(){
      $('.categorias').hide();
    });

    $('.ab').mouseover(function(){
      $('.about').show();
    });

    $('.cat, .logo, .contacto').mouseover(function(){
      $('.about').hide();
    });

    $('.about').mouseleave(function(){
      $('.about').hide();
    });
    $('.categorias').mouseleave(function(){
      $('.categorias').hide();
    });

    //Menu responsive links

    $('.cat-resp').on('click', function(){
      $('.categorias-resp ul').slideToggle();
    });

    $('.ab-resp').on('click', function(){
      $('.about-resp ul').slideToggle();
    });

//responsive hamburguer
    $('.ham').on('click', function(){
      $(this).toggleClass('clicked');
    });

    $('.ham').on('click', function(){
      $('.hide').slideToggle();
    });

//Resize remove class

if ($(window).width() < 820) {
    $('.post').removeClass('lead');
} else {
}

//Videos Home

$('.video1 .img .vervideo, .video2 .img .vervideo, .video3 .img .vervideo').on('click', function(){
  $('.overlayvideo').css('display', 'block');
});

$('.hamvideo').on('click', function(){
  $('.overlayvideo').css('display', 'none');
});


//post text

$('#mas').on('click', function(){
  var fontSize = parseInt($(".post .editor p").css("font-size"));
  fontSize = fontSize + 1 + "px";
  $('.post .editor p').css({'font-size':fontSize});
});

$('#menos').on('click', function(){
  var fontSize = parseInt($(".post .editor p").css("font-size"));
  fontSize = fontSize - 1 + "px";
  $('.post .editor p').css({'font-size':fontSize});
});

$("#share").stick_in_parent();


});
