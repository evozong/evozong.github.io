function toggleHamburger(burger, toggleMenuName) {
  // Toggle hamburger into a "close" icon
  burger.classList.toggle("burger-close")
  document.getElementById(toggleMenuName).classList.toggle("burger-toggle");
}
