const menuHamburger = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");

menuHamburger.addEventListener("click", () => {
    navLinks.classList.toggle("mobile-menu");
});
function logout() {
    // Clear saved login data (example: localStorage token)
    localStorage.removeItem("userToken");

    // Redirect to login page
    window.location.href = "login.html";
}


// for ano to sa log in keme
if (!localStorage.getItem("accounts")) {
  const demoAccounts = [
    { email: "admin@gmail.com", password: "passisword" }
  ];
  localStorage.setItem("accounts", JSON.stringify(demoAccounts));
}

function login() {
  const email = document.getElementById("email")?.value.trim();
  const password = document.getElementById("password")?.value.trim();
  if (!email || !password) {
    alert("Please enter email and password");
    return;
  }
  const accounts = JSON.parse(localStorage.getItem("accounts")) || [];

  const user = accounts.find(
    acc => acc.email === email && acc.password === password
  );

  if (user) {
    localStorage.setItem("loggedInUser", email);
    window.location.href = "index.html";
  } else {
    alert("Invalid email or password");
  }
}
