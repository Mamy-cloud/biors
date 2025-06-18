//affichage du texte dans la partie accueil lorsqu'on clique sur les textes dans l'article.

const clickText = document.querySelectorAll('.layer-bg');

clickText.forEach(element => {
    element.addEventListener("click", (event) => {
        // Supprime la classe "active" des autres éléments
        clickText.forEach(el => {
            if (el !== element) {
                el.classList.remove("active");
            }
        });

        // Active/Désactive l'élément cliqué
        element.classList.toggle("active");

        // Empêche la fermeture immédiate (évite que le document le ferme tout de suite)
        event.stopPropagation();
    });
});

// Fermer toutes les classes "active" si on clique en dehors
document.addEventListener("click", () => {
    clickText.forEach(element => {
        element.classList.remove("active");
    });
});