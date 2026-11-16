        function toggleSidebar() {
            const sidebar = document.getElementById('mySidebar');
            const main = document.getElementById('mainContent');
            sidebar.classList.toggle('closed');
            main.classList.toggle('full-width');
        }

        function changerTexte(section) {
            document.getElementById('titre-page').innerText = section;
            document.getElementById('texte-page').innerText = "Vous consultez actuellement la section : " + section + ".";
        }
const icone = document.getElementById("mon-icone");

icone.addEventListener("mouseover", () => {
  icone.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: "translate(5px, -5px)" },
      { transform: "translate(0, 0)" }
    ],
    {
      duration: 1000, 
      iterations: 1       }
  );
});
