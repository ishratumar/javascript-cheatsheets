function validateName(name) {
  // Make sure the name is not empty
  if (name.length == 0) {
     return "Name cannot be empty";
  }

  // Check that the name only contains letters and spaces
  if (!name.match(/^[a-zA-Z\s]+$/)) {
    
     return "Name can only contain letters and spaces";
  }

  // Make sure the name does not contain any numbers
  if (name.match(/\d+/)) {
    return "Name cannot contain numbers";
  }

  // Check the length of the name
  if (name.length > 30) {
    return "Name must be 30 characters or fewer";
  }
  if (name.length < 2) {
    return "Name must be at least 2 characters long";
  }

  // Name is valid
  return "";
}

function validateEmail(email) {
  // Make sure the email is not empty
  if (email.length == 0) {
    return "Email cannot be empty";
  }

  // Check that the email contains an @ symbol and a .
  if (!email.match(/^[^@]+@[^@.]+\.[^@]*\w\w$/)) {
    return "Invalid email address";
  }

  // Make sure the @ symbol is not the first character
  if (email.indexOf("@") == 0) {
    return "Invalid email address";
  }

  // Check that the email does not contain any spaces
  if (email.match(/\s/)) {
    return "Email cannot contain spaces";
  }

  // Make sure the email is not too long
  if (email.length > 100) {
    return "Email must be 100 characters or fewer";
  }

  // Email is valid
  return "";
}

function validateTextarea(textarea) {
  // Make sure the textarea is not empty
  if (textarea.length == 0) {
    return "Textarea cannot be empty";
  }

  // Check the length of the textarea
  if (textarea.length > 1000) {
    return "Textarea must be 1000 characters or fewer";
  }
  if (textarea.length < 10) {
    return "Textarea must be at least 10 characters long";
  }

  // Make sure the textarea does not contain any invalid characters
  if (textarea.match(/[<>]/)) {
    return "Textarea cannot contain < or > characters";
  }

  // Textarea is valid
  return "";
}

function validateForm() {
  // Get the form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Validate the name
  var nameError = validateName(name);
  if (nameError) {
    alert(nameError);
    return false;
  }

  // Validate the email
  var emailError = validateEmail(email);
  if (emailError) {
    alert(emailError);
    return false;
  }

  // Validate the textarea
  var messageError = validateTextarea(message);
  if (messageError) {
    alert(messageError);
    return false;
  }

  // Form is valid
  alert("Form submitted successfully!");
  return true;
}
