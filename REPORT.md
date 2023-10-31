# Rapport de Tests Cypress pour l'API Todo

## Test 1: Devrait récupérer zéro Todos (base de données vide) <span style="color:green">(Réussi)</span>
- La requête GET vers /todos renvoie un statut 200
- La réponse est un tableau vide

## Test 2: Devrait créer deux Todos <span style="color:green">(Réussi)</span>
- La création de la première tâche renvoie un statut 201
- L'ID de la première tâche est stocké avec succès
- La création de la deuxième tâche renvoie un statut 201
- L'ID de la deuxième tâche est stocké avec succès

## Test 3: Devrait récupérer deux Todos après création <span style="color:green">(Réussi)</span>
- La requête GET vers /todos renvoie un statut 200
- La réponse est un tableau contenant deux tâches
- Les tâches sont triées par date de création
- La première tâche a pour titre "Première tâche" et n'est pas complétée
- La deuxième tâche a pour titre "Deuxième tâche" et n'est pas complétée

## Test 4: Devrait mettre à jour la première tâche <span style="color:green">(Réussi)</span>
- La mise à jour de la première tâche renvoie un statut 200
- La tâche mise à jour correspond aux données attendues

## Test 5: Devrait récupérer deux Todos après mise à jour <span style="color:green">(Réussi)</span>
- La requête GET vers /todos renvoie un statut 200
- La réponse est un tableau contenant deux tâches (nombre inchangé)
- Les tâches sont triées par date de création
- La première tâche a été mise à jour avec succès et est complétée
- La deuxième tâche est inchangée et n'est pas complétée

## Test 6: Devrait supprimer la deuxième tâche <span style="color:green">(Réussi)</span>
- La suppression de la deuxième tâche renvoie un statut 200

## Test 7: Devrait récupérer une tâche après suppression <span style="color:green">(Réussi)</span>
- La requête GET vers /todos renvoie un statut 200
- La réponse est un tableau contenant une seule tâche (une tâche a été supprimée)
- La tâche restante est celle qui a été mise à jour et est complétée

## Test 8: Devrait supprimer la tâche mise à jour <span style="color:green">(Réussi)</span>
- La suppression de la tâche mise à jour renvoie un statut 200

## Test 9: Devrait récupérer zéro Todos après suppression <span style="color:green">(Réussi)</span>
- La requête GET vers /todos renvoie un statut 200
- La réponse est un tableau vide (la base de données est vide après la suppression)

## Test 10: Devrait générer une erreur lors de la mise à jour sur une base de données vide <span style="color:red">(Échec)</span>
- La tentative de mise à jour d'une ressource inexistante renvoie un statut 500 (erreur serveur)
# Recommandation : Assurez-vous de gérer les exceptions dans le contrôleur pour renvoyer un statut 404 lorsque vous essayez de mettre à jour une ressource inexistante dans une base de données vide.

## Test 11: Devrait générer une erreur lors de la suppression d'une tâche inexistante dans une base de données vide <span style="color:red">(Échec)</span>
- La tentative de suppression d'une ressource inexistante renvoie un statut 500 (erreur serveur)
# Recommandation : Assurez-vous de gérer les exceptions dans le contrôleur pour renvoyer un statut 404 lorsque vous essayez de supprimer une ressource inexistante dans une base de données vide.
