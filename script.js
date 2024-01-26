const myImages = ['image 1 (1).jpg', 'image 1 (2).jpg', 'image 1 (3).jpg', 'image 1 (4).jpg', 'image 1 (5).jpg', 'image 1 (6).jpg',  'image 1 (7).jpg' ];
let currentImage = 0;
let time = 5000;

function slidingImage (){
  const image = document.getElementById('slide');
  if(currentImage < myImages.length - 1){
    currentImage++
    image.src = `image/${myImages[currentImage]}`;
  } else{
    currentImage = 0;
  }
  setTimeout('slidingImage()', time);
}
window.onload = slidingImage();

const navlinks = document.querySelector('.navlinks');
const navToggle = document.querySelector('.navbar_toggle');
navToggle.addEventListener('click', function(){
  navlinks.classList.toggle('show-nav');
});


const accordionItem = document.querySelectorAll('.accordion');
accordionItem.forEach(function (items) {
    var accordionTitle = items.querySelector('.accordion-title');
    var accordionContent = items.querySelector('.accordion-content');

    accordionTitle.addEventListener('click', function () {
        accordionContent.classList.toggle('accordion-active');
    });

    accordionItem.forEach(function (otherItems) {
        if (otherItems !== items && otherItems.querySelector('.accordion-content').classList.toggle('accordion-active')) {
            otherItems.querySelector('.accordion-content').classList.remove('accordion-active');
        }
    });
});

var testSlidesIndex = 1;

document.addEventListener('DOMContentLoaded', function() {
  testSlideShow(testSlidesIndex);
});

function testSlideShow(index) {
  var testimonial = document.getElementsByClassName('mytestimonis');
  var sides = document.getElementsByClassName('dot');

  if (index > testimonial.length) {
      testSlidesIndex = 1;
  }

  for (var i = 0; i < testimonial.length; i++) {
      testimonial[i].style.display = 'none';
  }

  for (var i = 0; i < sides.length; i++) {
      sides[i].className = sides[i].className.replace('active', '');
  }

  testimonial[testSlidesIndex - 1].style.display = 'block';
  sides[testSlidesIndex - 1].className += ' active';
}

function nextprevSlides(index) {
  testSlideShow(testSlidesIndex += index);
}

function currentTestimonial(index) {
  testSlideShow(testSlidesIndex = index);
}

