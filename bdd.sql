/* Création de la table Admin */

CREATE table admin (
    login VARCHAR(50),
    password VARCHAR(100)
);


/* Insertion du login et du mot de passe crypté */

INSERT INTO admin (login, password)
VALUES ('Studi', '4ec2feb25e0e571fa0464a8f494f93cfd7f345d80654ed0cf7ce2aaab421dc50');




/* Création de la table mercadona pour lire/ajouter les articles */

CREATE table mercadona (
    id INT PRIMARY KEY AUTO_INCREMENT,
    label VARCHAR(50),
    category VARCHAR(50),
    description VARCHAR(50),
    price INT(5),
    discount INT(5),
    image VARCHAR(300)
);


/* Insertion des différents produits pour avoir un visuel de base */

INSERT INTO mercadona (label, category, description, price, discount, image)
VALUES
    ('Pantalon', 'Bas', 'Pantalon magnifique, à porter tous les jours', '80', '20', 'https://media.octobre-editions.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_816,q_auto:best,w_582/bwnzidjuk25sxjsvy3ru.jpg'),
    ('Pull', 'Haut', 'Pull tout doux à mettre chez soi ou pour sortir !', '90', '15', 'https://media.octobre-editions.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_816,q_auto:best,w_582/irqxkmpivtsgjnfcxpkg.jpg'),
    ('Chemise', 'Haut', 'Une texture légère et douce de cette matière en coton et lin est idéale pour l''été', '90', '0', '/static/images/newchemise.jpeg'),
    ('Veste', 'Haut', 'Veste de costume pour toutes occasions', '140', '0', 'https://media.octobre-editions.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_816,q_auto:best,w_582/qmbbxqzmi4wydukzi6dv.jpg'),
    ('Trousse de toilette', 'Accessoire', 'L''accessoire à offrir (ou s''offrir) ! Cette trousse de toilette en toile vous accompagnera dans tous vos déplacements ou au quotidien.', '50', '10', '/static/images/7194troussedetoilette.jpeg'),
    ('Chemise', 'Haut', 'Chemise en lin cousu à la main', '60', '0', 'https://media.octobre-editions.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_816,q_auto:best,w_582/mb9xsst9csyouvvi2gqs.jpg');