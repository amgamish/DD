document.addEventListener("DOMContentLoaded", function () {
  const contactBtn = document.getElementById("contactBtn");
  const contactInfo = document.getElementById("contactInfo");

  contactBtn.addEventListener("click", () => {
    contactInfo.style.display = contactInfo.style.display === "none" ? "block" : "none";
  });
});
