# CANDIDATE-QA-TEST 

![Image de Test](image_test.png)

## Introduction

Dans le cadre de ce projet, j'ai été chargé de réaliser des tests et de garantir la qualité de cette application.

## Principes de Tests ISTQB

Lors de nos tests, nous nous appuyons sur les principes fondamentaux du test logiciel conformément aux directives de l'ISTQB (International Software Testing Qualifications Board) :

1. **L'exhaustivité n'est pas possible**: Il est important de noter qu'il est impossible de tester chaque aspect de l'application. Étant donné que les ressources et le temps sont limités, il est essentiel de se concentrer sur les tests les plus pertinents en fonction de nos priorités.

2. **Concentration sur les points critiques**: Dans notre cas, les tests doivent se concentrer sur les endpoints de l'application et mettre en évidence les points faibles les plus critiques de l'application.

## Améliorations Possibles de l'Application

Pendant le processus de test, plusieurs opportunités d'amélioration de l'application ont été identifiées :

1. **Gestion des IDs des Todos**: Actuellement, les IDs des Todos sont générés automatiquement, ce qui signifie que nous ne connaissons pas ces IDs de manière statique. Cela limite notre capacité à effectuer certains tests qui supposent la connaissance préalable des IDs. Une amélioration possible serait de permettre la gestion manuelle ou semi-manuelle des IDs pour faciliter les tests spécifiques.

2. **Gestion des Exceptions**: Comme indiqué par les tests, les exceptions ne sont pas correctement prises en compte dans l'application. De nombreux scénarios d'exception peuvent survenir, notamment les exceptions liées à la base de données et à la synchronisation. Améliorer la gestion des exceptions est essentiel pour garantir la robustesse de l'application.

3. **Ajout d'un Front-End**: Intégrer un front-end avec des éléments tels que des liens, des boutons, des formulaires, des listes et des cartes pourrait offrir une autre perspective de l'application. Cela ouvrirait également la porte à des tests supplémentaires qui mettraient en valeur l'importance de Cypress dans l'ensemble du processus de développement.

4. **Authentification**: Si les titres des Todos peuvent contenir des informations privées telles que des numéros de téléphone, des adresses e-mail, des salaires, des plans stratégiques d'entreprise, etc., l'ajout d'une fonctionnalité d'authentification peut être pertinent. Cela permettrait de protéger les données sensibles et d'assurer la confidentialité des informations.

Ces améliorations contribueraient à renforcer la qualité et la convivialité de l'application .

J'ai fourni un rapport ([REPORT.md](REPORT.md)) des tests réalisés qui respecte deux contraintes :

1. Suffisamment technique pour que les développeurs puissent rapidement localiser la source du problème. J'ai inclus les codes de réponse tels que 200, 201, 404, 500, etc.

2. Suffisamment simple pour que les non-techniciens puissent comprendre. J'ai utilisé des termes tels que récupération, création, mise à jour et suppression au lieu de GET, POST, PUT et DELETE. J'ai également indiqué si le test a réussi ou non, de manière à ce que les développeurs puissent facilement identifier la méthode concernée.

Dans les prochaines heures, je fournirai un lien vers un autre référentiel où j'ai moi-même mis en œuvre les recommandations mentionnées dans le rapport de test pour démontrer que tous les tests vont réussir. De plus, je basculerai vers l'anglais pour les commentaires dans le code et dans le rapport après avoir effectué la vérification.

Merci.
