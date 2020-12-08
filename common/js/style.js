$(document).ready(function () {

  AOS.init({
    once: true,
  });
});


      $('#form').submit(function (event) {
        var formData = $('#form').serialize();
        $.ajax({
          url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdSBFCTXNQw4vi9Oxy7U7h8XJJUHaYq5BjuMFaBLcYuJawgjw/formResponse",
          data: formData,
          type: "POST",
          dataType: "xml",
          statusCode: {
            0: function () {
              $(".end-message").slideDown();
              $(".submit-btn").fadeOut();
              //window.location.href = "thanks.html";
            },
            200: function () {
              $(".false-message").slideDown();
            }
          }
        });
        event.preventDefault();
      });


      let swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 5,
      centeredSlides:true,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: true
      },
      breakpoints: {
        899: {
          slidesPerView: 4,
          spaceBetween: 50,
          centeredSlides:true,
          loop: true,
          autoplay: {
            delay: 5000,
            disableOnInteraction: true
          },
        },
        599: {
          slidesPerView: 3,
          spaceBetween: 5,
        },
        299: {
          slidesPerView: 1,
          spaceBetween: 0,
        }
      }
    });
