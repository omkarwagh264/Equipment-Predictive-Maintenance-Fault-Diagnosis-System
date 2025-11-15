document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("error-msg");

  // Allow login for any user who enters both fields
  if (user !== "" && pass !== "") {
    window.location.href = "dashboard.html"; // redirect after login
  } else {
    errorMsg.textContent = "⚠️ Please enter both username and password!";
  }
});
