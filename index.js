// preloader
$(document).ready(function() {
  setTimeout(function() {
    $('#ctn-preloader').addClass('loaded');
    // scroll visualized at the end
    $('body').removeClass('no-scroll-y');

    if ($('#ctn-preloader').hasClass('loaded')) {
      // whole preloader section is deleted
      $('#preloader').delay(1000).queue(function() {
        $(this).remove();
      });
    }
  }, 1000);
});

// change logo color when the navbar is black
window.addEventListener("scroll", (event) => {
  let scrollY = this.scrollY;
  
  if (scrollY >= 100){
    $("#logo").css({
      "display": "none",
    });
    $("#logo-white").css({
      "display": "inline",
    });
  } else if (scrollY < 100 || scrollY == 0){
      $("#logo-white").css({
        "display": "none",
      });
      $("#logo").css({
        "display": "inline",
      });
    }
});

// transition of the hamburger button
function myFunction(x) {
  x.classList.toggle("change");
}

let btn = document.querySelector('.hamburger');
let box = document.querySelectorAll('.item'), i;

btn.addEventListener('click', function () {
  for(i = 0; i < box.length; ++i){
    box[i].classList.toggle('show');
  }
}, false);

// navbar background is black if scroll is > 100
$(window).scroll(function() {    
  var scroll = $(window).scrollTop();

  if (scroll >= 100) {
    $(".container").addClass("scrolling");
  } else {
      $(".container").removeClass("scrolling");
    }
});

//slider
$(function() {

  // slider type
  $t = "slide"; // opitions are fade and slide
  
  //variables
  $f = 1000,  // fade in/out speed
  $s = 1000,  // slide transition speed (for sliding carousel)
  $d = 5000;  // duration per slide
  
  $n = $('.slide').length; //number of slides
  $w = $('.slide').width(); // slide width
  $c = $('.slider').width(); // container width
   $ss = $n * $w; // slideshow width

  
    function timer() {
      $('.timer').animate({"width":$w}, $d);
      $('.timer').animate({"width":0}, 0);
  }


// fading function
  function fadeInOut() {
    timer();
      $i = 0;    
      var setCSS = {
          'position' : 'absolute',
          'top' : '0',
          'left' : '0'
      }        
      
      $('.slide').css(setCSS);
      
      //show first item
      $('.slide').eq($i).show();
      

      setInterval(function() {
        timer();
          $('.slide').eq($i).fadeOut($f);
          if ($i == $n - 1) {
              $i = 0;
          } else {
              $i++;
          }
          $('.slide').eq($i).fadeIn($f, function() {
              $('.timer').css({'width' : '0'});
          });

      }, $d);
      
  }
  
  function slide() {
    timer();
      var setSlideCSS = {
          'float' : 'left',
          'display' : 'inline-block',
          'width' : $c
      }
      var setSlideShowCSS = {
          'width' : $ss // set width of slideshow container
      }
      $('.slide').css(setSlideCSS);
      $('.slideshow').css(setSlideShowCSS); 
      
      
      setInterval(function() {
          timer();
          $('.slideshow').animate({"left": -$w}, $s, function(){
              // to create infinite loop
              $('.slideshow').css('left',0).append( $('.slide:first'));
          });
      }, $d);
      
  }
  
  if ($t == "fade") {
      fadeInOut();
      
  } if ($t == "slide") {
      slide();
      
  } else {
    
  }
});

// year counter in footer 2
const year = document.getElementById("actualYear");
const actualYear = new Date();
year.innerHTML = actualYear.getFullYear();