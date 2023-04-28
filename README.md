<h1>Bienvenue sur le site de Mercadona, un shop en ligne pour le besoin de mon examen final avec Studi/Hetic.</h1>

Pour le voir, il suffit de se rendre sur le site hébergé sur Heroku : https://mercadonajulien.herokuapp.com/ <br> 
La base de donnée est sur Railway et ne devrait pas se déconnecter de si tôt mais au besoin, j'indique plus bas comment contourner un souci.


<h2>/!\ En cas de souci de connexion au site ou d'erreur /!\ </h2>
Le site n'est pas accessible ? Rassurez vous, je vous explique ici comment le lancer en local.

1/ Il va falloir commencer par télécharger le projet en local :
- En cliquant sur le repo Git, il est possible en haut à droite de cliquer sur ![Capture d’écran 2023-04-28 à 15 50 39](https://user-images.githubusercontent.com/95760057/235165932-599a2f6f-5c5d-4555-b93e-c86cb12640cb.png) puis de le técharger au format .zip.
- Sinon, il est toujours possible de le faire via le terminal ou son IDE favori en tapant 'gh repo clone JuloCS22/mercadona'.

2/ Une fois le dossier copié ou téléchargé, il faut l'ouvrir avec VSCode ou Inttellij (par exemple)
Avant de continuer, pensez à installer les dépendances en tapant ceci dans votre Terminal : pip install -r requirements.txt


3/ En se plaçant sur le fichier 'app.py', il ne reste plus qu'à lancer :
- Sur Intellij, il faut cliquer en haut à droite sur ce bouton ![Capture d’écran 2023-04-28 à 15 53 04](https://user-images.githubusercontent.com/95760057/235166568-c776b309-2f1f-4f2a-8ee6-d7b111596f86.png)
- Sur VSCode, toujours en haut à droite, mais le bouton est celui ci ![Capture d’écran 2023-04-28 à 15 53 52](https://user-images.githubusercontent.com/95760057/235166733-11dcc858-60e7-4612-8516-0bfbf807bc10.png)

4/ Une fois ses étapes réalisées, il faudra soit cliquer sur le lien ouvert dans Run en bas de votre IDE, par exemple : ![Capture d’écran 2023-04-28 à 15 54 45](https://user-images.githubusercontent.com/95760057/235166939-669ac391-005e-4b4e-895b-8b2824b56814.png)
<br> Ou bien la page s'ouvrira automatiquement. <br>
Il est également possible d'y aller manuellement en tapant sur Chrome, Firefox ou autre dans la barre d'adresse : http://127.0.0.1:5000


<h2>/!\ Si le problème persiste et que rien ne s'affiche /!\</h2>
Il s'agit donc d'un souci avec la base de données, mais pas de panique, il y a toujours un moyen de contournement.

Un fichier .sql est disponible dans le dossier, tous les éléments s'y trouve afin de lancer en local une base de donnée avec les données préremplies.
Il vous faudra en revanche modifier dans le fichier 'app.py' l'ensemble des données suivantes avec les votres, qui peuvent changer selon le logiciel de gestion de BDD : <br>
![Capture d’écran 2023-04-28 à 16 04 41](https://user-images.githubusercontent.com/95760057/235169487-4cedf864-9eab-4501-bb8b-c5ecc0aefdab.png)



<h3>Bonne découverte du site à vous !</h3>
