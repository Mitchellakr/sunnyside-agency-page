const burgermenu = document.querySelector(".hamburger"),
      menu = document.querySelector("#menu");

    burgermenu.addEventListener("click", (e) => {
    menu.classList.toggle("mobilemenu");
});