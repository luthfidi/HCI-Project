// navbar

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarlinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarlinks.classList.toggle('active')
})


// register

function validateForm() {
  var name = document.forms["registrationForm"]["name"].value;
  var password = document.forms["registrationForm"]["password"].value;
  var email = document.forms["registrationForm"]["email"].value;
  var dob = document.forms["registrationForm"]["dob"].value;
  var agreement = document.forms["registrationForm"]["agreement"].checked;

  if (name === "" || password === "" || email === "" || dob === "" || !agreement) {
    alert("Please fill in all fields and agree to the regulations.");
    return false;
  }
}

