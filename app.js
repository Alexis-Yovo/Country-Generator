document.getElementById("btn-pays").addEventListener("click", function () {
  fetch("https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags")
    .then(response => response.json())
    .then(data => {
      // Choix d'un pays au hasard
      const pays = data[Math.floor(Math.random() * data.length)];

      // Extraction des informations
      const nom = pays.name.common;
      const capital = pays.capital ? pays.capital[0] : "Aucune";
      const population = new Intl.NumberFormat().format(pays.population);
      const region = pays.region;
      const drapeau = pays.flags.svg;

      // Affichage
      const infoHTML = `
        <h2>🚩 ${nom}</h2>
        <img src="${drapeau}" alt="Drapeau de ${nom}" style="width: 100px; height: auto; margin-bottom: 1rem;">
        <p><strong>Capitale :</strong> ${capital}</p>
        <p><strong>Population :</strong> ${population}</p>
        <p><strong>Région :</strong> ${region}</p>
      `;
      document.getElementById("pays-info").innerHTML = infoHTML;
    })
    .catch(error => {
      console.error("Erreur lors de la récupération des données :", error);
      document.getElementById("pays-info").innerHTML = "<p>Impossible de charger les données.</p>";
    });
});