const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const signupForm = document.getElementById("signupForm");
const emailInput = document.getElementById("email");
const formMessage = document.getElementById("formMessage");

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!emailInput.checkValidity()) {
    emailInput.reportValidity();
    return;
  }

  formMessage.textContent = `Thanks! ${emailInput.value} is ready to get started.`;
  signupForm.reset();
});
