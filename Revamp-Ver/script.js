// Navbar toggle functionality
const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    if (this.hash !== "") {
      e.preventDefault();

      const hash = this.hash;
      document.querySelector(hash).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Form validation
function validateForm() {
  const form = document.forms["registrationForm"];
  const name = form["name"].value;
  const password = form["password"].value;
  const email = form["email"].value;
  const dob = form["dob"].value;
  const agreement = form["agreement"].checked;

  if (name === "" || password === "" || email === "" || dob === "" || !agreement) {
    alert("Please fill in all fields and agree to the regulations.");
    return false;
  }

  // Additional validation
  if (password.length < 8) {
    alert("Password must be at least 8 characters long.");
    return false;
  }

  if (!isValidEmail(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  if (!isAdult(dob)) {
    alert("You must be at least 18 years old to register.");
    return false;
  }

  return true;
}

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

function isAdult(birthDate) {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }

  return age >= 18;
}

// Add animation on scroll
window.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('.products-card, .gallery-card, .event-card, .customer-card');
  
  elements.forEach(element => {
    const position = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    
    if (position < screenPosition) {
      element.classList.add('animate');
    }
  });
});