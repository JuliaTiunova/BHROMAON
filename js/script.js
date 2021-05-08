const burger = document.querySelector(".burger");
burger.addEventListener("click", () => {
  document.body.classList.toggle("menu-open");
});

const mobile = document.querySelector(".mobile");
mobile.addEventListener("click", () => {
  document.body.classList.toggle("menu-open");
});
