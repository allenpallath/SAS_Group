/*--------------------------------------------------------------
# Responsive Navigation Menu
--------------------------------------------------------------*/
function openNav() {
 document.getElementById("myNav").style.width = "100%";
 document.getElementById("nav_btn").style.visibility = 'hidden';
}

function closeNav() {
 document.getElementById("myNav").style.width = "0%";
 document.getElementById("nav_btn").style.visibility = 'visible';
}

/*--------------------------------------------------------------
# Slide Show
--------------------------------------------------------------*/
var heroCarousel = $("#heroCarousel");
var heroCarouselIndicators = $("#hero-carousel-indicators");
heroCarousel.find(".carousel-inner").children(".carousel-item").each(function(index) {
  (index === 0) ?
  heroCarouselIndicators.append("<li data-target='#heroCarousel' data-slide-to='" + index + "' class='active'></li>"):
    heroCarouselIndicators.append("<li data-target='#heroCarousel' data-slide-to='" + index + "'></li>");
});

heroCarousel.on('slid.bs.carousel', function(e) {
  $(this).find('h2').addClass('animated fadeInDown');
  $(this).find('p').addClass('animated fadeInUp');
  $(this).find('.btn-get-started').addClass('animated fadeInUp');
});
