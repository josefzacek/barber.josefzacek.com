$(document).ready(function() {

  function validateNextButton() {
    var buttonDisabled = $('.get-in-touch-row form input[name="Name"]').val().trim() === '' ||
      $('.get-in-touch-row form input[name="Email"]').val().trim() === '' ||
      $('.get-in-touch-row form input[name="Phone"]').val().trim() === '' ||
      $('.get-in-touch-row form input[name="Subject"]').val().trim() === '' ||
      $('.get-in-touch-row form textarea').val().trim() === '';

    if (buttonDisabled) {
      $('.get-in-touch-row button').attr('disabled', 'disabled');
    } else {
      $('.get-in-touch-row button').removeAttr('disabled');
    }
  }

  $('.get-in-touch-row form input').on('keyup', validateNextButton);
  $('.get-in-touch-row form textarea').on('keyup', validateNextButton);

  $(".get-in-touch-row button").click(function(e) {
    e.preventDefault();
    $(".get-in-touch-row form").addClass("d-none");
    $(".form-submitted-text").removeClass("d-none");
  })

})

// banner text animation
window.onload = function() {
  gsap.to(".banner-row h1",
    {opacity: 1, duration: 3},
  );
  gsap.to(".banner-row h1",
    {x: 0, duration: 1}
  );
}
