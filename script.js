const textElement = document.getElementById("text");
const additionalText = document.querySelector(".additional-text");
const imageAndText = document.querySelector(".image-and-text");
const projectsSection = document.getElementById("projects");
const text =
  "Hello, this is a basic typewriter animation created by < torpakwastaken >";
let charIndex = 0;

function type() {
  if (charIndex < text.length) {
    textElement.textContent += text.charAt(charIndex);
    charIndex++;
    setTimeout(type, 50);
  } else {
    // Animation is complete, reveal the additional text and image
    additionalText.style.display = "block";
    imageAndText.style.display = "flex";
    projectsSection.style.display = "block"; // Show the projects section
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
