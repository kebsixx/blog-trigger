// klik hamburger menu
const navbarNav = document.querySelector(".nav-links");

document.querySelector("#toggle").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar elemen
const hamburger = document.querySelector(".hamburger");
const toggle = document.querySelector("#toggle");

document.addEventListener("click", function (event) {
  if (
    !hamburger.contains(event.target) &&
    !navbarNav.contains(event.target) &&
    !toggle.contains(event.target)
  ) {
    navbarNav.classList.remove("active");
  }
});
