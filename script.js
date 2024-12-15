$(document).ready(function () {  // jQuery: Wait for the DOM to be ready
    // Form validation and submission
    $('form').on('submit', function (e) {  // jQuery: Attach a submit event listener to the form
        e.preventDefault(); // Prevent form submission

        // Get form data
        let name = $('#name').val().trim();  // jQuery: Get value of #name field
        let email = $('#email').val().trim();  // jQuery: Get value of #email field
        let phone = $('#phone').val().trim();  // jQuery: Get value of #phone field
        let address = $('#address').val().trim();  // jQuery: Get value of #address field
        
        // Validate name, email, address, and phone
        let isValid = true;
        let errorMessages = [];

        // Validate name (non-empty)
        if (name === '') {
            isValid = false;
            errorMessages.push('Name is required.');
        }

        // Validate email (basic format check)
        let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            isValid = false;
            errorMessages.push('Please enter a valid email address.');
        }

        // Validate phone number with +XX or 10 digits
        let phonePattern = /^\+?\d{1,3}([ -])?\d{10}$/;
        if (!phonePattern.test(phone)) {
            isValid = false;
            errorMessages.push('Please enter a valid phone number (e.g., +XX or 10 digits).');
        }

        // Validate address (non-empty)
        if (address === '') {
            isValid = false;
            errorMessages.push('Address is required.');
        }

        // If any validation failed, show errors
        if (!isValid) {
            $('#formResult')  // jQuery: Select the element with id formResult
                .removeClass('success')  // jQuery: Remove 'success' class
                .addClass('error')  // jQuery: Add 'error' class
                .html(errorMessages.join('<br>'))  // jQuery: Set HTML content of formResult
                .show();  // jQuery: Show formResult
        } else {
            // If validation passes, show success message and formatted details
            $('#formResult')  // jQuery: Select the element with id formResult
                .removeClass('error')  // jQuery: Remove 'error' class
                .addClass('success')  // jQuery: Add 'success' class
                .html(`
                    <h3>🎉 Registration Successful! 🎉</h3>
                    <p>Thank you, <strong>${name}</strong>, for registering!</p>
                    <table>
                        <tr><th>Full Name:</th><td>${name}</td></tr>
                        <tr><th>Email Address:</th><td>${email}</td></tr>
                        <tr><th>Phone Number:</th><td>${phone}</td></tr>
                        <tr><th>Address:</th><td>${address}</td></tr>
                    </table>
                    <div class="mascot-container">
                        <img src="zeroform.png alt="Mascot" class="mascot">
                        <p class="mascot-caption">You're officially part of our amazing community!</p>
                    </div>
                `)  // jQuery: Set HTML content of formResult
                .show();  // jQuery: Show formResult
        }
    });

    // Phone number formatting
    $('#phone').on('input', function () {  // jQuery: Attach an input event listener to #phone field
        let phoneValue = $(this).val();  // jQuery: Get the value of the current #phone field
        phoneValue = phoneValue.replace(/[^+\d]/g, '');  // jQuery: Remove non-numeric characters (except +)
        if (phoneValue.length > 13) phoneValue = phoneValue.slice(0, 13);  // Limit length to 13 characters
        $(this).val(phoneValue);  // jQuery: Set the formatted value back to the phone field
    });
});
