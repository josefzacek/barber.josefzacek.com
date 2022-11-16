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

// register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// banner text animation
window.onload = function() {
  gsap.to(".banner-row h1",
    {opacity: 1, duration: 3},
  );
  gsap.to(".banner-row h1",
    {x: 0, duration: 1}
  );
}

// about row text
gsap.set(".about-row .row .col-lg-6", {x: "-20vw", opacity: 0});
gsap.to('.about-row .row .col-lg-6', {
  x: 0,
  opacity: 1,
  duration: 1,
  scrollTrigger: {
    trigger: ".about-row .row .col-lg-6",
    start: "top 80%",
  }
});

// about row image
gsap.set(".about-row .row .col-lg-3:nth-child(2)", {x: "20vw", opacity: 0});
gsap.to('.about-row .row .col-lg-3:nth-child(2)', {
  x: 0,
  opacity: 1,
  duration: 1,
  scrollTrigger: {
    trigger: ".about-row .row .col-lg-3:nth-child(2)",
    start: "top 80%",
  }
});

// about row working hours
gsap.set(".about-row .row .col-lg-3:nth-child(3)", {x: "20vw", opacity: 0});
gsap.to('.about-row .row .col-lg-3:nth-child(3)', {
  x: 0,
  opacity: 1,
  duration: 1,
  scrollTrigger: {
    trigger: ".about-row .row .col-lg-3:nth-child(3)",
    start: "top 80%",
  }
});

// gallery row images
gsap.set(".gallery-row img", {y: "20px", opacity: 0});
$('.gallery-row img').each(function(){
  gsap.to(this, {
    y: 0,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: this,
      start: "top 70%",
    }
  });
})

// pricing row text left
gsap.set(".pricing-row .row .col-md-6:nth-child(1)", {x: "-20vw", opacity: 0});
gsap.to('.pricing-row .row .col-md-6:nth-child(1)', {
  x: 0,
  opacity: 1,
  duration: 1,
  scrollTrigger: {
    trigger: ".pricing-row .row .col-md-6:nth-child(1)",
    start: "top 80%",
  }
});

// pricing row text right
gsap.set(".pricing-row .row .col-md-6:nth-child(2)", {x: "20vw", opacity: 0});
gsap.to('.pricing-row .row .col-md-6:nth-child(2)', {
  x: 0,
  opacity: 1,
  duration: 1,
  scrollTrigger: {
    trigger: ".pricing-row .row .col-md-6:nth-child(2)",
    start: "top 80%",
  }
});

// testimonials row
gsap.set(".testimonials-row .col-md-3", {y: "20px", opacity: 0});
$('.testimonials-row .col-md-3').each(function(){
  gsap.to(this, {
    y: 0,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: this,
      start: "top 70%",
    }
  });
})
