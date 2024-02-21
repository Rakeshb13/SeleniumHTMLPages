document.getElementById("bankAccountForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var city = document.getElementById("city").value;
  var district = document.getElementById("district").value;
  var state = document.getElementById("state").value;
  var gender = document.querySelector('input[name="gender"]:checked').value;
  var termsAccepted = document.getElementById("terms").checked;
  
  var infoDisplay = document.getElementById("displayInfo");
  infoDisplay.innerHTML = "<h3>Bank Account Registration Information:</h3>" + 
                          "<p><strong>Name:</strong> " + name + "</p>" +
                          "<p><strong>Email:</strong> " + email + "</p>" +
                          "<p><strong>City:</strong> " + city + "</p>" +
                          "<p><strong>District:</strong> " + district + "</p>" +
                          "<p><strong>State:</strong> " + state + "</p>" +
                          "<p><strong>Gender:</strong> " + gender + "</p>" +
                          "<p><strong>Terms Accepted:</strong> " + (termsAccepted ? "Yes" : "No") + "</p>";
  
  document.getElementById("bankAccountForm").reset();
});
