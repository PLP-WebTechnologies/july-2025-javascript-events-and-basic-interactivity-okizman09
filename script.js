let header = document.getElementById("header");
header.addEventListener("onclick", function(){background="green";});
function toggleTheme() {
  const body = document.body;
  body.classList.toggle("dark-mode");
}


let count = 0;
document.getElementById("counterBtn").addEventListener("click", () => {
  count++;
  document.getElementById("counterValue").innerText = count;
});
document.querySelector(".faq-toggle").addEventListener("click", () => {
  const answer = document.querySelector(".faq-answer");
  answer.style.display = answer.style.display === "none" ? "block" : "none";
});
document.getElementById("dropdownBtn").addEventListener("click", () => {
  const menu = document.getElementById("dropdownMenu");
  menu.style.display = menu.style.display === "none" ? "block" : "none";
});
document.querySelectorAll(".tab").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-content").forEach(c => c.style.display = "none");
    document.getElementById("tab" + btn.dataset.tab).style.display = "block";
  });
});

document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault(); // stop form from refreshing page

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let message = "";

  if (name.length < 3) {
    message = "Name must be at least 3 characters.";
  } else if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
    message = "Invalid email format.";
  } else if (password.length < 6) {
    message = "Password must be at least 6 characters.";
  } else {
    message = "✅ Registration successful!";
  }

  document.getElementById("formMessage").innerText = message;
});
