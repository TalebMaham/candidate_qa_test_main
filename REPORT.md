# Rapport de Tests Cypress pour l'API Todo

## Test 1: Devrait récupérer zéro Todos (base de données vide) <span style="color:green">(Réussi)</span>

### Attendu :
- Une requête de récupération vers /todos doit renvoyer un statut 200.
- La réponse doit être un tableau vide.

### Résultat :
- La requête de récupération vers /todos a renvoyé un statut 200.
- La réponse était un tableau vide.

## Test 2: Devrait créer deux Todos <span style="color:green">(Réussi)</span>

### Attendu :
- La création de la première tâche doit renvoyer un statut 201.
- L'ID de la première tâche doit être stocké avec succès.
- La création de la deuxième tâche doit renvoyer un statut 201.
- L'ID de la deuxième tâche doit être stocké avec succès.

### Résultat :
- La création de la première tâche a renvoyé un statut 201.
- L'ID de la première tâche a été stocké avec succès.
- La création de la deuxième tâche a renvoyé un statut 201.
- L'ID de la deuxième tâche a été stocké avec succès.

## Test 3: Devrait récupérer deux Todos après création <span style="color:green">(Réussi)</span>

### Attendu :
- Une requête de récupération vers /todos doit renvoyer un statut 200.
- La réponse doit être un tableau contenant deux tâches.
- Les tâches doivent être triées par date de création.
- La première tâche doit avoir pour titre "Première tâche" et ne doit pas être complétée.
- La deuxième tâche doit avoir pour titre "Deuxième tâche" et ne doit pas être complétée.

### Résultat :
- La requête de récupération vers /todos a renvoyé un statut 200.
- La réponse était un tableau contenant deux tâches.
- Les tâches étaient triées par date de création.
- La première tâche avait pour titre "Première tâche" et n'était pas complétée.
- La deuxième tâche avait pour titre "Deuxième tâche" et n'était pas complétée.

## Test 4: Devrait mettre à jour la première tâche <span style="color:green">(Réussi)</span>

### Attendu :
- La mise à jour de la première tâche doit renvoyer un statut 200.
- La tâche mise à jour doit correspondre aux données attendues.

### Résultat :
- La mise à jour de la première tâche a renvoyé un statut 200.
- La tâche mise à jour correspondait aux données attendues.

## Test 5: Devrait récupérer deux Todos après mise à jour <span style="color:green">(Réussi)</span>

### Attendu :
- Une requête de récupération vers /todos doit renvoyer un statut 200.
- La réponse doit être un tableau contenant deux tâches (nombre inchangé).
- Les tâches doivent être triées par date de création.
- La première tâche doit avoir été mise à jour avec succès et être complétée.
- La deuxième tâche doit être inchangée et ne doit pas être complétée.

### Résultat :
- La requête de récupération vers /todos a renvoyé un statut 200.
- La réponse était un tableau contenant deux tâches (nombre inchangé).
- Les tâches étaient triées par date de création.
- La première tâche avait été mise à jour avec succès et était complétée.
- La deuxième tâche était inchangée et n'était pas complétée.

## Test 6: Devrait supprimer la deuxième tâche <span style="color:green">(Réussi)</span>

### Attendu :
- La suppression de la deuxième tâche doit renvoyer un statut 200.

### Résultat :
- La suppression de la deuxième tâche a renvoyé un statut 200.

## Test 7: Devrait récupérer une tâche après suppression <span style="color:green">(Réussi)</span>

### Attendu :
- Une requête de récupération vers /todos doit renvoyer un statut 200.
- La réponse doit être un tableau contenant une seule tâche (une tâche a été supprimée).
- La tâche restante doit être celle qui a été mise à jour et être complétée.

### Résultat :
- La requête de récupération vers /todos a renvoyé un statut 200.
- La réponse était un tableau contenant une seule tâche (une tâche a été supprimée).
- La tâche restante était celle qui avait été mise à jour et était complétée.

## Test 8: Devrait supprimer la tâche mise à jour <span style="color:green">(Réussi)</span>

### Attendu :
- La suppression de la tâche mise à jour doit renvoyer un statut 200.

### Résultat :
- La suppression de la tâche mise à jour a renvoyé un statut 200.

## Test 9: Devrait récupérer zéro Todos après suppression <span style="color:green">(Réussi)</span>

### Attendu :
- Une requête de récupération vers /todos doit renvoyer un statut 200.
- La réponse doit être un tableau vide (la base de données est vide après la suppression).

### Résultat :
- La requête de récupération vers /todos a renvoyé un statut 200.
- La réponse était un tableau vide (la base de données était vide après la suppression).

## Test 10: Devrait générer une erreur 404 lors de la mise à jour sur une base de données vide <span style="color:red">(Échec)</span>

### Attendu :
- La tentative de mise à jour d'une ressource inexistante doit renvoyer un statut 404 (Ressource inexistante).

### Résultat :
- La tentative de mise à jour d'une ressource inexistante a renvoyé un statut 500 (Erreur serveur)..
- **Recommandation** : Il est recommandé de gérer les exceptions dans le contrôleur pour renvoyer un statut 404 lorsque vous essayez de mettre à jour une ressource inexistante dans une base de données vide.

## Test 11: Devrait générer une erreur 404 lors de la suppression d'une tâche inexistante dans une base de données vide <span style="color:red">(Échec)</span>

### Attendu :
- La tentative de suppression d'une ressource inexistante doit renvoyer un statut 404 (Ressource inexistante).


### Résultat :
- La tentative de suppression d'une ressource inexistante a renvoyé un statut 500 (Erreur serveur).
- **Recommandation** : Il est recommandé de gérer les exceptions dans le contrôleur pour renvoyer un statut 404 lorsque vous essayez de supprimer une ressource inexistante dans une base de données vide.
