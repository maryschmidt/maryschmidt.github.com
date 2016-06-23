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
    scrollVal = $('#contact').offset().top - 36;

    $('html, body').animate({scrollTop: scrollVal}, 'fast');
  });


  // Form submission handler
  var request;

  $("#contact-form").submit(function (e) {

    if (request) {
      request.abort();
    }

    var $form = $(this);

    var $inputs = $form.find("input, select, button, textarea");

    // var $formSegment = $("#form-segment");

    var serializedData = $form.serialize();

    $inputs.prop("disabled", true);

    // $formSegment.addClass("loading");

    request = $.ajax({
      url: "https://script.google.com/macros/s/AKfycbzbSVWKEor3Vs-vm5rwyFR9bHc0Es_pva-Qac_xSakI1C7BuCNe/exec",
      type: "post",
      data: serializedData
    }).done(function (res, code, jqXHR) {

      $("#contact").empty().html("<h1>Thank you! I'll be in touch</h1>");

    }).fail(function (jqXHR, code, err) {

      // console.log("Form submission error: " + code, err);

    }).always(function () {

      $inputs.prop("disabled", false);

      // $formSegment.removeClass("loading");

    });

    e.preventDefault();

  });

});
