$(document).ready(function() {

  $('label').on('click', function(event) {
    var label = $("label[for='" + event.target.id + "']");
    $(label).hide();
  });

  $('input, textarea').on('focus', function(event) {
    var label = $("label[for='" + event.target.name + "']");
    $(label).hide();
  });

  $('input, textarea').on('blur', function(event) {
    var label = $("label[for='" + event.target.name + "']");
    if (event.target.value === '') {
      $(label).show();
    }
  });

  $('.trigger').click(function() {
    scrollVal = $('#featured-projects').offset().top - 136;

    $('html, body').animate({scrollTop: scrollVal}, 'fast');
  });

});
