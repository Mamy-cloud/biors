//menu de navigation en responsive
const btn = document.querySelector(".burger");
const menu = document.querySelector('nav');
const items = document.querySelectorAll('.items')

btn.addEventListener("click", () => {
  btn.classList.toggle("active");
  menu.classList.toggle("menu-active");

});

items.forEach(item => {
  item.addEventListener('click', ()=> {
     btn.classList.remove("active");
     menu.classList.remove("menu-active");
  })
});

// Fermer le menu quand on clique en dehors
document.addEventListener("click", (event) => {
    if (!menu.contains(event.target) && !btn.contains(event.target)) {
        btn.classList.remove("active");
        menu.classList.remove("menu-active");
    }
});




