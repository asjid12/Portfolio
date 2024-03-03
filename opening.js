const aboutBtn = document.getElementById("aboutBtn");
const workBtn = document.getElementById("workBtn");
const experienceBtn = document.getElementById("educationBtn");

aboutBtn.addEventListener("click", function() {
  window.location.href = "about.html"; // Replace with your "about.html" filename
});

workBtn.addEventListener("click", function() {
  window.location.href = "work.html"; // Replace with your "work.html" filename
});

experienceBtn.addEventListener("click", function() {
  window.location.href = "education.html"; // Replace with your "experience.html" filename
});
