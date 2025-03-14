//************SIGN UP PAGE**************
// Helper function to display error messages
function showError(elementId, message) {
  document.getElementById(elementId).textContent = message;
}

// Helper function to clear error messages
function clearError(elementId) {
  document.getElementById(elementId).textContent = "";
}

// Validate TC Kimlik No
function validateTC(tc) {
  const tcRegex = /^[1-9]\d{10}$/;
  return tcRegex.test(tc);
}

// Validate Phone Number
function validatePhone(phone) {
  const phoneRegex = /^\+90\d{10}$/;
  return phoneRegex.test(phone);
}

// Validate Email
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Validate Password Strength
function validatePassword(password) {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
}

// Automatically convert name and surname to uppercase
document.getElementById("name").addEventListener("input", function () {
  this.value = this.value.toUpperCase();
});

document.getElementById("surname").addEventListener("input", function () {
  this.value = this.value.toUpperCase();
});

// Form submission handler
document
  .getElementById("signupForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    // Get form values
    const tc = document.getElementById("TC").value;
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const gender = document.getElementById("gender").value;
    const dateOfBirth = document.getElementById("dateOfBirth").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const password = document.getElementById("password").value;
    const retypePassword = document.getElementById("retypePassword").value;

    // Clear previous errors
    clearError("TCError");
    clearError("emailError");
    clearError("phoneError");
    clearError("passwordError");
    clearError("retypePasswordError");

    // Validate TC Kimlik No
    if (!validateTC(tc)) {
      showError(
        "TCError",
        "TC Kimlik No 11 karakter olmalı ve 0 ile başlamamalıdır."
      );
      return;
    }

    // Validate Email
    if (!validateEmail(email)) {
      showError("emailError", "Geçerli bir email adresi girin.");
      return;
    }

    // Validate Phone Number
    if (!validatePhone(phoneNumber)) {
      showError(
        "phoneError",
        "Telefon numarası +90 ile başlamalı ve 10 rakam içermelidir."
      );
      return;
    }

    // Validate Password Strength
    if (!validatePassword(password)) {
      showError(
        "passwordError",
        "Şifre en az 8 karakter, büyük harf, küçük harf, rakam ve özel karakter içermelidir."
      );
      return;
    }

    // Validate Retype Password
    if (password !== retypePassword) {
      showError("retypePasswordError", "Şifreler eşleşmiyor.");
      return;
    }

    // If all validations pass, submit the form
    const formData = {
      TC: tc,
      name: name,
      surname: surname,
      gender: gender,
      dateOfBirth: dateOfBirth,
      email: email,
      phoneNumber: phoneNumber,
      password: password,
    };

    try {
      const response = await fetch("/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        window.location.href = "/login.html"; // Redirect to login page
      } else {
        alert(data.message || "Kayıt başarısız. Tekrar deneyiniz");
      }
    } catch (error) {
      console.error("Hata:", error);
      alert("Bir hata oluştu. Lütfen tekrar deneyin.");
    }
  });
document.getElementById("phoneNumber").addEventListener("focus", function () {
  if (!this.value.startsWith("+90")) {
    this.value = "+90 ";
  }
});

document.getElementById("phoneNumber").addEventListener("input", function () {
  if (!this.value.startsWith("+90")) {
    this.value = "+90 ";
  }
});

//************LOGIN PAGE**************
document
  .getElementById("loginForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent default form submission

    const TC = document.getElementById("TC").value;
    const password = document.getElementById("password").value;

    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ TC, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Assuming `data.user.name` contains the user's name
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", data.user.name); // Store user name

        // Redirect to userPage.html
        window.location.href = "/applicantPage.html"; // Ensure this path is correct
      } else {
        // Show error message from backend
        document.getElementById("errorMessage").innerText =
          data.message || "Invalid TC or password";
      }
    } catch (error) {
      console.error("Login error:", error);
      document.getElementById("errorMessage").innerText =
        "An error occurred. Please try again.";
    }
  });
// Get the user data from localStorage
const user = localStorage.getItem("user");

// Check if the user is logged in
if (!user) {
  window.location.href = "login.html"; // Redirect to login if no user data
} else {
  document.getElementById("userName").textContent = "Hello, " + user + "!"; // Display username
}

// Function to logout
function logout() {
  localStorage.removeItem("user");
  window.location.href = "login.html"; // Redirect to login page
}

// Example: Check if the user has applications (this can be fetched from a backend or local storage)
const userApplications = [
  { title: "Application 1", status: "Pending" },
  { title: "Application 2", status: "Accepted" },
  { title: "Application 2", status: "Rejected" },
];

const applicationsList = document.getElementById("applicationsList");
const noApplicationsMessage = document.getElementById("noApplicationsMessage");

// If no applications, show the message
if (userApplications.length === 0) {
  noApplicationsMessage.style.display = "block";
} else {
  // Populate applications
  userApplications.forEach((application) => {
    const applicationCard = document.createElement("div");
    applicationCard.classList.add("card", "application-card");
    applicationCard.innerHTML = `
              <div class="card-body">
                  <h5 class="card-title">${application.title}</h5>
                  <p class="card-text">Status: ${application.status}</p>
              </div>
          `;
    applicationsList.appendChild(applicationCard);
  });
}
