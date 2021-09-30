$('.responsive').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
       
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
$('.responsive2').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
$('.responsive3').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
const hamo = document.getElementById("open");
const hamc = document.getElementById("close");
const hammenu = document.getElementById("hamburger");

let i;
hamc.style.display = 'none';
hammenu.style.display = 'none';

function hamfunc(){
  if(i===0){
    i=1;
  hammenu.style.display = 'block';
  hamo.style.display = 'none';
  hamc.style.display = 'block';}
  else{
    i=0;
    hammenu.style.display = 'none';
    hamo.style.display = 'block';
    hamc.style.display = 'none';
  }
}
var acc = document.getElementsByClassName("accordion");
// var hide = document.getElementsByClassName("hide");
var j;

for (j = 0; i < acc.length; i++) {
  acc[j].addEventListener("click", function() {
    this.classList.toggle("active");
    // hide[j].style.display='none';
    var panel = this.nextElementSibling;
    console.log(panel);
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      // hide[j].style.display='inline';
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
addEventListener("click")
