Dashboard Analytique - Visualisation et Analyse de Données Utilisateurs
Ce projet consiste à créer un tableau de bord interactif permettant de visualiser et analyser des données utilisateur de manière dynamique et intuitive. Le dashboard utilise un backend Python (Flask) pour récupérer et traiter les données, et un frontend construit avec D3.js et Chart.js pour offrir des graphiques interactifs.

Fonctionnalités principales :
Backend (Python, Flask) : Un serveur Flask expose des données utilisateurs fictives via une API RESTful (/api/data), permettant de récupérer les informations nécessaires à l'affichage des graphiques.
Frontend (D3.js, Chart.js) : Le tableau de bord affiche plusieurs types de graphiques, dont des graphiques à barres et à secteurs, pour visualiser la répartition des utilisateurs par âge et genre.
Interactivité : Les utilisateurs peuvent visualiser des graphiques interactifs qui mettent en évidence des tendances et des informations clés issues des données.
Technologies utilisées :
Backend : Flask (Python), Pandas (pour le traitement des données)
Frontend : D3.js (pour les graphiques interactifs), Chart.js (pour les graphiques à barres et à secteurs), HTML5, CSS3
API : Flask expose une API RESTful pour fournir les données au frontend.
Objectifs du projet :
Ce projet vise à démontrer la puissance de Python et de ses bibliothèques pour le traitement des données, tout en mettant en avant la flexibilité de D3.js pour la création de graphiques dynamiques et interactifs. Le tableau de bord permet d'analyser des données de manière visuelle et de découvrir des tendances importantes à partir d'informations utilisateur.

Installation :
Clonez le dépôt.
Installez les dépendances Python : pip install -r requirements.txt.
Lancez le serveur Flask avec python app.py.
Accédez à l'application dans votre navigateur à l'adresse http://127.0.0.1:5000/.
Contributions :
Les contributions sont les bienvenues ! Si vous souhaitez améliorer ce projet, n'hésitez pas à ouvrir une issue ou à soumettre une pull request.

