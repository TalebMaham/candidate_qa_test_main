Tests Cypress pour l'API Todo

**Test 1: Devrait récupérer zéro Todos (base de données vide)**
   - La requête GET vers /todos renvoie un statut 200 ![Réussi](https://via.placeholder.com/15/00FF00/000000?text=+)
   - La réponse est un tableau vide ![Réussi](https://via.placeholder.com/15/00FF00/000000?text=+)

**Test 2: Devrait créer deux Todos**
   - La création de la première tâche renvoie un statut 201 ![Réussi](https://via.placeholder.com/15/00FF00/000000?text=+)
   - L'ID de la première tâche est stocké avec succès ![Réussi](https://via.placeholder.com/15/00FF00/000000?text=+)
   - La création de la deuxième tâche renvoie un statut 201 ![Réussi](https://via.placeholder.com/15/00FF00/000000?text=+)
   - L'ID de la deuxième tâche est stocké avec succès ![Réussi](https://via.placeholder.com/15/00FF00/000000?text=+)

**Test 3: Devrait récupérer deux Todos après création**
   - La requête GET vers /todos renvoie un statut 200 ![Réussi](https://via.placeholder.com/15/00FF00/000000?text=+)
   - La réponse est un tableau contenant deux tâches ![Réussi](https://via.placeholder.com/15/00FF00/000000?text=+)
   - Les tâches sont triées par date de création ![Réussi](https://via.placeholder.com/15/00FF00/000000?text=+)
   - La première tâche a pour titre "Première tâche" et n'est pas complétée ![Réussi](https://via.placeholder.com/15/00FF00/000000?text=+)
   - La deuxième tâche a pour titre "Deuxième tâche" et n'est pas complétée ![Réussi](https://via.placeholder.com/15/00FF00/000000?text=+)

**Test 4: Devrait mettre à jour la première tâche**
   - La mise à jour de la première tâche renvoie un statut 200 ![Réussi](https://via.placeholder.com/15/00FF00/000000?text=+)
   - La tâche mise à jour correspond aux données attendues ![Réussi](https://via.placeholder.com/15/00FF00/000000?text=+)

**Test 5: Devrait récupérer deux Todos après mise à jour**
   - La requête GET vers /todos renvoie un statut 200 ![Réussi](https://via.placeholder.com/15/00FF00/000000?text=+)
   - La réponse est un tableau contenant deux tâches (nombre inchangé) ![Réussi](https://via.placeholder.com/15/00FF00/000000?text=+)
   - Les tâches sont triées par date de création ![Réussi](https://via.placeholder.com/15/00FF00/000000?text=+)
   - La première tâche a été mise à jour avec succès et est complétée ![Réussi](https://via.placeholder.com/15/00FF00/000000?text=+)
   - La deuxième tâche est inchangée et n'est pas complétée ![Réussi](https://via.placeholder.com/15/00FF00/000000?text=+)

**Test 6: Devrait supprimer la deuxième tâche**
   - La suppression de la deuxième tâche renvoie un statut 200 ![Réussi](https://via.placeholder.com/15/00FF00/000000?text=+)

**Test 7: Devrait récupérer une tâche après suppression**
   - La requête GET vers /todos renvoie un statut 200 ![Réussi](https://via.placeholder.com/15/00FF00/000000?text=+)
   - La réponse est un tableau contenant une seule tâche (une tâche a été supprimée) ![Réussi](https://via.placeholder.com/15/00FF00/000000?text=+)
   - La tâche restante est celle qui a été mise à jour et est complétée ![Réussi](https://via.placeholder.com/15/00FF00/000000?text=+)

**Test 8: Devrait supprimer la tâche mise à jour**
   - La suppression de la tâche mise à jour renvoie un statut 200 ![Réussi](https://via.placeholder.com/15/00FF00/000000?text=+)

**Test 9: Devrait récupérer zéro Todos après suppression**
   - La requête GET vers /todos renvoie un statut 200 ![Réussi](https://via.placeholder.com/15/00FF00/000000?text=+)
   - La réponse est un tableau vide (la base de données est vide après la suppression) ![Réussi](https://via.placeholder.com/15/00FF00/000000?text=+)

**Test 10: Devrait générer une erreur lors de la mise à jour sur une base de données vide**
    - La tentative de mise à jour d'une ressource inexistante renvoie un statut 404 ![Échec](https://via.placeholder.com/15/FF0000/000000?text=-)
    Recommandation : Assurez-vous de gérer les exceptions dans le contrôleur pour renvoyer un statut 404 lorsque vous essayez de mettre à jour une ressource inexistante dans une base de données vide.

**Test 11: Devrait générer une erreur lors de la suppression d'une tâche inexistante dans une base de données vide**
    - La tentative de suppression d'une ressource inexistante renvoie un statut 404 ![Échec](https://via.placeholder.com/15/FF0000/000000?text=-)
    Recommandation : Assurez-vous de gérer les exceptions dans le contrôleur pour renvoyer un statut 404 lorsque vous essayez de supprimer une ressource inexistante dans une base de données vide.
