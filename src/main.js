// Navbar 토글버튼 클릭 처리
const navbarMenu = document.querySelector(".header__bottom");
const navbarToggle = document.querySelector(".header__toggle");
navbarToggle.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
});
