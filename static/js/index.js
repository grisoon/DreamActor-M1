window.HELP_IMPROVE_VIDEOJS = false;

var INTERP_BASE = "./static/interpolation/stacked";
var NUM_INTERP_FRAMES = 240;

var interp_images = [];
function preloadInterpolationImages() {
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    var path = INTERP_BASE + '/' + String(i).padStart(6, '0') + '.jpg';
    interp_images[i] = new Image();
    interp_images[i].src = path;
  }
}

function setInterpolationImage(i) {
  var image = interp_images[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper').empty().append(image);
}


$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

    });

    // Teaser carousel options (显示2个视频)
    var teaserOptions = {
        slidesToScroll: 1,
        slidesToShow: 2,
        loop: true,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 3000,
    }

    // Diversity carousel options (显示4个视频)
    var diversityOptions = {
        slidesToScroll: 1,
        slidesToShow: 4,
        loop: true,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 3000,
    }

    // Pose carousel options (显示3个视频)
    var poseOptions = {
        slidesToScroll: 1,
        slidesToShow: 3,
        loop: true,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 3000,
    }

    // 所有carousel的通用配置
    var carouselOptions = {
        loop: true,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 3000,
    }

    // 初始化所有carousel
    var teaserCarousel = bulmaCarousel.attach('#results-carousel', {
        ...carouselOptions,
        slidesToShow: 2,
        slidesToScroll: 1,
    });

    var diversityCarousel = bulmaCarousel.attach('#diversity-carousel', {
        ...carouselOptions,
        slidesToShow: 4,
        slidesToScroll: 1,
    });

    var poseCarousel = bulmaCarousel.attach('#pose-carousel', {
        ...carouselOptions,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    var portraitCarousel = bulmaCarousel.attach('#portrait-carousel', {
        ...carouselOptions,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    // Access to bulmaCarousel instance of an element
    var element = document.querySelector('#my-element');
    if (element && element.bulmaCarousel) {
    	// bulmaCarousel instance is available as element.bulmaCarousel
    	element.bulmaCarousel.on('before-show', function(state) {
    		console.log(state);
    	});
    }

    /*var player = document.getElementById('interpolation-video');
    player.addEventListener('loadedmetadata', function() {
      $('#interpolation-slider').on('input', function(event) {
        console.log(this.value, player.duration);
        player.currentTime = player.duration / 100 * this.value;
      })
    }, false);*/
    preloadInterpolationImages();

    $('#interpolation-slider').on('input', function(event) {
      setInterpolationImage(this.value);
    });
    setInterpolationImage(0);
    $('#interpolation-slider').prop('max', NUM_INTERP_FRAMES - 1);

    bulmaSlider.attach();

    var controlCarousel = bulmaCarousel.attach('#control-carousel', {
        ...carouselOptions,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

})
