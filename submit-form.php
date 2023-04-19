<?php

// Retrieve the form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Set the recipient email address
$to = 'jayvan.aycock@gmail.com';

// Set the email subject
$subject = 'New form submission from your website';

// Set the email message
$body = "Name: $name\nEmail: $email\nMessage: $message";

// Send the email
mail($to, $subject, $body);

// Redirect to a confirmation page
header('Location: confirmation.html');
exit;

?>