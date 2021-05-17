jQuery(document).ready(function($) {

  $('.js-contact-scroll').click(function () {
    var p = $(".js-contact-base").eq(0).offset().top - $('.header').height();
    $('body,html').animate({
      scrollTop: p
    }, "swing");
    return false;
  });
  $('.js-price-scroll').click(function () {
    var p = $(".js-price-base").eq(0).offset().top - $('.header').height();
    $('body,html').animate({
      scrollTop: p
    }, "swing");
    return false;
  });
  $('.js-feature-scroll').click(function () {
    var p = $(".js-feature-base").eq(0).offset().top - $('.header').height();
    $('body,html').animate({
      scrollTop: p
    }, "swing");
    return false;
  });

    $('.accordion-item .accordion_header').click(function(){
      //クリックされた.accordion-itemの中の.accordion_headerに隣接する.accordion_innerが開いたり閉じたりする。
      $(this).next('.accordion_inner').slideToggle();
      $(this).toggleClass("open");
    });

    const $submitBtn = $('#js-submit')
$('#form input,#form textarea').on('change', function () {
if (
$('#form input[type="text"]').val() !== "" &&
$('#form input[type="email"]').val() !== "" &&
$('#form input[type="checkbox"]').val() !== "" &&
$('#form #privacyCheck').prop('checked') === true
) {
$submitBtn.prop('disabled', false);

} else {
$submitBtn.prop('disabled', true);
}
});

});
