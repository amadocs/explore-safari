//Script for active navigation menu
    $(document).ready(function () {
        $("ul.navbar-nav > li > a").click(
          function (e) {
            $("ul.navbar-nav > li").removeClass("active");
            $("ul.navbar-nav > li > a").css("color", "");
            $("ul.navbar-nav > li > a").css("background", "");  
            $(this).addClass("active");
            $(this).css("color", "green");
            $(this).css("background", "white");
        });
    });

// Email js onload
window.onload = function() {
  document.getElementById('contactForm').addEventListener('submit', function(event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      this.contact_number.value = Math.random() * 100000 | 0;
      // these IDs from the previous steps
      emailjs.sendForm('contact_service', 'contactForm', this)
          .then(function() {
              console.log('SUCCESS!');
          }, function(error) {
              console.log('FAILED...', error);
          });
  }); 
}


// Defining a function to display error message
function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form
function validateForm() {
  // Retrieving the values of form elements
  var firstname = document.contactForm.firstname.value;
  var lastname = document.contactForm.lastname.value;
  var email = document.contactForm.email.value;
  var phonenumber = document.contactForm.phonenumber.value;
  var subject = document.contactForm.subject.value;
  var message = document.contactForm.message.value;

  // Defining error variables with a default value
  var firstnameErr =
    (lastnameErr =
    emailErr =
    phonenumberErr =
    subjectErr =
    messageErr =
      true);

  // Validate first name
  if (firstname == '') {
    printError('firstnameErr', 'Please write your first name');
  } else {
    var regex = /^[a-zA-Z\s]+$/;
    if (regex.test(firstname) === false) {
      printError('firstnameErr', 'Please write a valid first name');
    } else {
      printError('firstnameErr', '');
      firstnameErr = false;
    }
  }

  // Validate last name
  if (lastname == '') {
    printError('lastnameErr', 'Please write your last name');
  } else {
    var regex = /^[a-zA-Z\s]+$/;
    if (regex.test(lastname) === false) {
      printError('lastnameErr', 'Please write a valid last name');
    } else {
      printError('lastnameErr', '');
      lastnameErr = false;
    }
  }

  // Validate email address
  if (email == '') {
    printError('emailErr', 'Please write your email address');
  } else {
    // Regular expression for basic email validation
    var regex = /^\S+@\S+\.\S+$/;
    if (regex.test(email) === false) {
      printError('emailErr', 'Please write a valid email address');
    } else {
      printError('emailErr', '');
      emailErr = false;
    }
  }

  // Validate phone number
  if (phonenumber == '') {
    printError('phonenumberErr', 'Please write your phone number');
  } else {
    var regex = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g
    ;
    if (regex.test(phonenumber) === false) {
      printError(
        'phonenumberErr',
        'Please write a valid phone number'
      );
    } else {
      printError('phonenumberErr', '');
      phonenumberErr = false;
    }
  }

  // Validate subject field
  if (subject == '') {
    printError('subjectErr', 'Please write a subject');
  } else {
    var regex = /^[a-zA-Z\s]+$/;
    if (regex.test(subject) === false) {
      printError('subjectErr', 'Please write a valid subject');
    } else {
      printError('subjectErr', '');
      subjectErr = false;
    }
  }

  // Validate message field
  if (message == '') {
    printError('messageErr', 'Please write a message');
  } else {
    var regex = /^[a-zA-Z\s]+$/;
    if (regex.test(message) === false) {
      printError('messageErr', 'Please write a valid message');
    } else {
      printError('messageErr', '');
      messageErr = false;
    }
  }

  // Prevent the form from being submitted if there are any errors
  if (
    (firstnameErr ||
      lastnameErr ||
      emailErr ||
      phonenumberErr ||
      subjectErr ||
      messageErr) == true
  ) {
    return false;
  } else {
    // Creating a string from input data for preview
    var dataPreview =
      "You've entered the following details: \n" +
      'First Name: ' +
      firstname +
      '\n' +
      'Last Name: ' +
      lastname +
      '\n' +
      'Email Address: ' +
      email +
      '\n' +
      'Phone Number: ' +
      phonenumber +
      '\n' +
      'Subject: ' +
      subject +
      '\n' +
      'Message: ' +
      message +
      '\n' +
      '\n';

    // Display input data in a dialog box before submitting the form
  //alert(dataPreview); 
// Email js send mail function
    SendMail();
  }
}

function SendMail() {
  var params = {
    first_name: document.getElementById('firstname').value,
    last_name: document.getElementById('lastname').value,
    email_id: document.getElementById('email').value,
    phone_number: document.getElementById('phonenumber').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value,
  };

  emailjs
    .send('service_bes8sht', 'template_4lh9huh', params)
    .then(function (res) {
      alert('Thank you for submitting the form');
      resetForm();

    });
}
// reset form data after form submission
function resetForm() {
  const form = document.getElementById('contactForm');
  form.reset();
}
