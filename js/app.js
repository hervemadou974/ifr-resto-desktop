        // Votre code JavaScript pour la gestion des livraisons en Electron.js ira ici
        // Assurez-vous d'ajouter les fonctionnalités nécessaires, telles que l'ajout des livraisons à la table.
        async function ajouterLivraison() {
        const response=fetch("https://ifr-restau-api.vercel.app/api",{
            method:"POST",
            body:JSON.stringify(
                {
    "utilisateurId": "clozlhb6500011gyt72aiva2m",
    "nom": "repas du jour et dessert",
    "etablissementId": "clozlb9xy0000xmht4tsxet5g",
    "lignesResgistres": [
        {
            "repas": "sauté de granola",
            "quantite": "5 kg",
            "temperature": "8 °C"
        },
        {
            "repas": "oreo caramel",
            "quantite": "555 kg",
            "temperature": "-55 °C"
        }
        ]
    }

            )
        })
        console.log(response)
        }