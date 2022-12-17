// sticky navbar
window.onscroll = () => {
  this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}
var loader = document.getElementById("preloader");
var navbar = document.getElementById("fixed-top");

