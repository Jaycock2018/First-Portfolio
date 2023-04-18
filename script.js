// Smooth scrolling to anchor links
$('a[href^="#"]').on('click', function(event) {
  var target = $(this.getAttribute('href'));
  if( target.length ) {
    event.preventDefault();
    $('html, body').stop().animate({
      scrollTop: target.offset().top
    }, 1000);
  }
});

// Responsive navbar toggle
$('.navbar-toggle').on('click', function() {
  $('.navbar-nav').slideToggle();
});

// Contact form submission
$('form').submit(function(e) {
  e.preventDefault();
  var name = $('#name').val();
  var email = $('#email').val();
  var message = $('#message').val();
  $.ajax({
    url: $(this).attr('action'),
    type: 'POST',
    data: {
      name: name,
      email: email,
      message: message
    },
    success: function() {
      $('form')[0].reset();
      alert('Thank you for your message!');
    },
    error: function() {
      alert('There was a problem sending your message. Please try again later.');
    }
  });
});