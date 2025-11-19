const loginForm = document.getElementById("loginForm");
const loginButton = loginForm.querySelector("button");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const login = document.getElementById("login").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!login || !password) {
    showToast("Please fill all fields!", "error");
    return;
  }

  loginButton.disabled = true;
  const originalText = loginButton.innerText;
  loginButton.innerText = "Loading...";

  setTimeout(() => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(u => u.login === login && u.password === password);

    if (user) {
      showToast(`Welcome, ${user.surname} ${user.name}!`, "success");

      // 🔥 FOYDALANUVCHI MA'LUMOTINI SAQLAB QO'YISH (ixtiyoriy)
      localStorage.setItem("currentUser", JSON.stringify(user));

      loginForm.reset();

      // 🔥 1.5 soniyadan keyin Programms sahifasiga o'tkazish
      setTimeout(() => {
        window.location.href = "../Programms/programms.html";
      }, 1500);

    } else {
      showToast("Invalid login or password!", "error");
    }

    loginButton.disabled = false;
    loginButton.innerText = originalText;
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


if (user) {
  showToast(`Welcome, ${user.surname} ${user.name}!`, "success");
  loginForm.reset();

  setTimeout(() => {
    window.location.href = "../Programms/programms.html";
  }, 1500);

} else {
  showToast("Invalid login or password!", "error");
}
