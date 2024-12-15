<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate input
    $name = htmlspecialchars($_POST['name']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $phone = htmlspecialchars($_POST['phone']);
    $address = htmlspecialchars($_POST['address']);

    // Phone validation: check if the number is valid with +XX or 10 digits
    $phonePattern = '/^\+?\d{1,3}([ -])?\d{10}$/';
    $isValidPhone = preg_match($phonePattern, $phone);

    // Display formatted result
    if (!empty($name) && !empty($email) && !empty($phone) && !empty($address) && $isValidPhone) {
        echo "
        <!DOCTYPE html>
        <html lang='en'>
        <head>
            <meta charset='UTF-8'>
            <meta name='viewport' content='width=device-width, initial-scale=1.0'>
            <title>Submission Success</title>
            <link rel='stylesheet' href='submit.css'>
        </head>
        <body>
            <div class='result-card'>
                <h2 class='success-title'>🎉 Registration Successful! 🎉</h2>
                <p class='thank-you'>Thank you, <strong>$name</strong>, for registering!</p>
                <div class='user-details'>
                    <table>
                        <tr><th>Full Name:</th><td>$name</td></tr>
                        <tr><th>Email Address:</th><td>$email</td></tr>
                        <tr><th>Phone Number:</th><td>$phone</td></tr>
                        <tr><th>Address:</th><td>$address</td></tr>
                    </table>
                </div>
                <div class='mascot-container'>
                    <img src='zeroform.png' alt='Mascot' class='mascot'>
                    <p class='mascot-caption'>You're officially part of our amazing community!</p>
                </div>
            </div>
        </body>
        </html>
        ";
    } else {
        echo "
        <!DOCTYPE html>
        <html lang='en'>
        <head>
            <meta charset='UTF-8'>
            <meta name='viewport' content='width=device-width, initial-scale=1.0'>
            <title>Error</title>
            <link rel='stylesheet' href='submit.css'>
        </head>
        <body>
            <div class='result-card'>
                <h2 class='success-title' style='color: red;'>🚫 Submission Failed 🚫</h2>
                <p class='thank-you'>Please fill all the fields correctly and make sure the phone number is in the correct format (+XX or 10 digits).</p>
            </div>
        </body>
        </html>
        ";
    }
} else {
    echo "
    <!DOCTYPE html>
    <html lang='en'>
    <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <title>Error</title>
        <link rel='stylesheet' href='submit.css'>
    </head>
    <body>
        <div class='result-card'>
            <h2 class='success-title' style='color: red;'>🚫 Invalid Request 🚫</h2>
            <p class='thank-you'>Please submit the form correctly.</p>
        </div>
    </body>
    </html>
    ";
}
?>
