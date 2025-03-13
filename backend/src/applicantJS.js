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
