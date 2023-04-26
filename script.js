$('form').submit(function(e) {
  e.preventDefault();
  var name = $('#name').val();
  var email = $('#email').val();
  var message = $('#message').val();
  $.ajax({
    url: 'https://formspree.io/jayvan.aycock@gmail.com',
    type: 'POST',
    data: {
      name: name,
      _replyto: email,
      message: message
    },
    dataType: 'json',
    success: function() {
      $('form')[0].reset();
      alert('Thank you for your message!');
    },
    error: function() {
      alert('There was a problem sending your message. Please try again later.');
    }
  });
});
