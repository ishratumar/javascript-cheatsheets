function validateForm() {
  // Get the values of the input fields
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

// Set the error messages to an empty string
  document.getElementById("nameError").innerHTML = "";
  document.getElementById("emailError").innerHTML = "";
  document.getElementById("messageError").innerHTML = "";

// If the name field is empty
  if (name == "") {
    // Display an error message
    document.getElementById("nameError").innerHTML = "Name is required";
    // Return false to prevent the form from being submitted
    return false;
  }
// If the email field is empty
  if (email == "") {
    // Display an error message
    document.getElementById("emailError").innerHTML = "Email is required";
    // Return false to prevent the form from being submitted
    return false;
  }
 // If the email field is not a valid email address
  if (!email.includes("@")) {
    // Display an error message
    document.getElementById("emailError").innerHTML = "Invalid email address";
    // Return false to prevent the form from being submitted
    return false;
  }
// If the message field is empty
  if (message == "") {
    // Display an error message
    document.getElementById("messageError").innerHTML = "Message is required";
    // Return false to prevent the form from being submitted
    return false;
  }
 // If all fields are valid, submit the form
  alert("Form submitted successfully!");
  return true;
}