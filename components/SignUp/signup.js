const signupForm = document.getElementById("signupForm");
const signupButton = signupForm.querySelector("button");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const surname = document.getElementById("surname").value.trim();
  const email = document.getElementById("email").value.trim();
  const login = document.getElementById("login").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!name || !surname || !email || !login || !password) {
    showToast("Please fill all fields!", "error");
    return;
  }

  signupButton.disabled = true;
  const originalText = signupButton.innerText;
  signupButton.innerText = "Creating...";

  setTimeout(() => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    if (users.some(u => u.login === login || u.email === email)) {
      showToast("Login or email already exists!", "error");
    } else {
      const newUser = { name, surname, email, login, password };

      // 1) Barcha userlar ro‘yxatiga qo‘shamiz
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));

      // 2) FOYDALANUVCHI MA'LUMOTLARINI ALOHIDA SAQLAYMIZ
      localStorage.setItem("currentUser", JSON.stringify(newUser));

      showToast("Account created successfully!", "success");

      signupForm.reset();

      // 3) Login sahifaga o‘tkazish
      setTimeout(() => {
window.location.href = "../Login/login.html";
      }, 1500);
    }

    signupButton.disabled = false;
    signupButton.innerText = originalText;
  }, 3000);
});

function showToast(message, type="success") {
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerText = message;
  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add("show"), 10);
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}
