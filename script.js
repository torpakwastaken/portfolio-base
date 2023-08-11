const textElement = document.getElementById("text");
const additionalText = document.querySelector(".additional-text"); // Select the additional text container
const text =
  "Hello, this is a basic < typewriter > animation created by Y.Emre KOYUNLU.";
let charIndex = 0;

function type() {
  if (charIndex < text.length) {
    textElement.textContent += text.charAt(charIndex);
    charIndex++;
    setTimeout(type, 50); // Adjust the timeout as needed
  } else {
    // Animation is complete, reveal the additional text
    additionalText.style.display = "block";
  }
}

type();

const themeToggle = document.getElementById("themeToggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  const isDarkMode = body.classList.contains("dark-mode");
  if (isDarkMode) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// Check local storage for saved theme preference
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark-mode");
}
