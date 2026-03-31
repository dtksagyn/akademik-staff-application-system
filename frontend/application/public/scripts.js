document.addEventListener("DOMContentLoaded", function () {
  //************SIGN UP PAGE**************

  function showError(elementId, message) {
    const el = document.getElementById(elementId);
    if (el) el.textContent = message;
  }

  function clearError(elementId) {
    const el = document.getElementById(elementId);
    if (el) el.textContent = "";
  }

  function validateTC(tc) {
    return /^[1-9]\d{10}$/.test(tc);
  }

  function validatePhone(phone) {
    return /^\+90\d{10}$/.test(phone);
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validatePassword(password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );
  }

  const nameInput = document.getElementById("name");
  if (nameInput) {
    nameInput.addEventListener("input", function () {
      this.value = this.value.toUpperCase();
    });
  }

  const surnameInput = document.getElementById("surname");
  if (surnameInput) {
    surnameInput.addEventListener("input", function () {
      this.value = this.value.toUpperCase();
    });
  }

  const signupForm = document.getElementById("signupForm");
  if (signupForm) {
    signupForm.addEventListener("submit", async function (event) {
      event.preventDefault();

      const tc = document.getElementById("TC")?.value;
      const name = nameInput?.value;
      const surname = surnameInput?.value;
      const gender = document.getElementById("gender")?.value;
      const dateOfBirth = document.getElementById("dateOfBirth")?.value;
      const email = document.getElementById("email")?.value;
      const phoneNumber = document.getElementById("phoneNumber")?.value;
      const password = document.getElementById("password")?.value;
      const retypePassword = document.getElementById("retypePassword")?.value;

      clearError("TCError");
      clearError("emailError");
      clearError("phoneError");
      clearError("passwordError");
      clearError("retypePasswordError");

      if (!validateTC(tc)) {
        showError(
          "TCError",
          "TC Kimlik No 11 karakter olmalı ve 0 ile başlamamalıdır."
        );
        return;
      }

      if (!validateEmail(email)) {
        showError("emailError", "Geçerli bir email adresi girin.");
        return;
      }

      if (!validatePhone(phoneNumber)) {
        showError(
          "phoneError",
          "Telefon numarası +90 ile başlamalı ve 10 rakam içermelidir."
        );
        return;
      }

      if (!validatePassword(password)) {
        showError(
          "passwordError",
          "Şifre en az 8 karakter, büyük harf, küçük harf, rakam ve özel karakter içermelidir."
        );
        return;
      }

      if (password !== retypePassword) {
        showError("retypePasswordError", "Şifreler eşleşmiyor.");
        return;
      }

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
          window.location.href = "/login.html";
        } else {
          alert(data.message || "Kayıt başarısız. Tekrar deneyiniz");
        }
      } catch (error) {
        console.error("Hata:", error);
        alert("Bir hata oluştu. Lütfen tekrar deneyin.");
      }
    });

    const phoneInput = document.getElementById("phoneNumber");
    if (phoneInput) {
      phoneInput.addEventListener("focus", function () {
        if (!this.value.startsWith("+90")) this.value = "+90 ";
      });
      phoneInput.addEventListener("input", function () {
        if (!this.value.startsWith("+90")) this.value = "+90 ";
      });
    }
  }

  //************LOGIN PAGE**************

  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", async function (event) {
      event.preventDefault();

      const TC = document.getElementById("TC")?.value;
      const password = document.getElementById("password")?.value;

      if (!TC || !password) {
        document.getElementById("errorMessage").innerText =
          "TC ve şifre zorunludur.";
        return;
      }

      try {
        const response = await fetch("/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ TC, password }),
        });

        const data = await response.json();

        if (response.ok) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", data.user.name);
          window.location.href = "/applicantPage.html";
        } else {
          document.getElementById("errorMessage").innerText =
            data.message || "Invalid TC or password";
        }
      } catch (error) {
        console.error("Login error:", error);
        document.getElementById("errorMessage").innerText =
          "Bir hata oluştu. Lütfen tekrar deneyin.";
      }
    });
  }

  //************USER PAGE**************
  const user = localStorage.getItem("user");
  const userNameElement = document.getElementById("userName");

  if (userNameElement) {
    if (!user) {
      window.location.href = "login.html";
    } else {
      userNameElement.textContent = "Hello, " + user + "!";
    }
  }

  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
      localStorage.removeItem("user");
      window.location.href = "login.html";
    });
  }

  const applicationsList = document.getElementById("applicationsList");
  const noApplicationsMessage = document.getElementById(
    "noApplicationsMessage"
  );

  if (applicationsList && noApplicationsMessage) {
    const userApplications = [
      { title: "Application 1", status: "Pending" },
      { title: "Application 2", status: "Accepted" },
      { title: "Application 3", status: "Rejected" },
    ];

    if (userApplications.length === 0) {
      noApplicationsMessage.style.display = "block";
    } else {
      userApplications.forEach((application) => {
        const card = document.createElement("div");
        card.classList.add("card", "application-card");
        card.innerHTML = `
          <div class="card-body">
            <h5 class="card-title">${application.title}</h5>
            <p class="card-text">Status: ${application.status}</p>
          </div>
        `;
        applicationsList.appendChild(card);
      });
    }
  }
});
