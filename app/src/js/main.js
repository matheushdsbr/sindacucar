$(function () {
  $(".slick-textos").slick();

  $(".slick-cards").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          dots: false,
          arrows: false,
          autoplaySpeed: 2500,
        }
      }
    ]
  });
});
