// Habibi Wear — small page behaviours

// Current year in the footer
document.getElementById("yr").textContent = new Date().getFullYear();

// Smooth-scroll when "View Collection" is clicked
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener("click", function (e) {
    var target = document.querySelector(link.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
