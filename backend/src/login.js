//************LOGIN PAGE**************
document
  .getElementById("loginForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent default form submission

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
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
          data.message || "Invalid email or password";
      }
    } catch (error) {
      console.error("Login error:", error);
      document.getElementById("errorMessage").innerText =
        "An error occurred. Please try again.";
    }
  });
