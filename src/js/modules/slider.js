import $ from "jquery";
import "slick-carousel";

$(".promo-slider").on(
  `afterChange`,
  function (event, slick, currentSlide, nextSlide) {
    $(".promo-slider__counter-current").text(
      "0" + (1 + slick.currentSlide)
    );
  }
);

$(".promo-slider").on(`init reInit`, function (event, slick) {
  $(".promo-slider__counter-total").text("0" + slick.slideCount);
});


 $(".promo-slider").slick({
  arrows: false,
  dots: true,
  autoplay: true,
  appendDots: $(".promo-slider__thumbnails"),
});

