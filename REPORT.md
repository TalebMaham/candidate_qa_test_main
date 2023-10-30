# Rapport de Test - API Todo

Ce rapport documente les tests effectués sur l'API Todo pour garantir son bon fonctionnement.

## Introduction

L'API Todo est une application de gestion de tâches qui expose des fonctionnalités telles que la création, la mise à jour, la suppression et la récupération de tâches.

## Tests de Base de Données Vide

### Devrait récupérer zéro Todos (base de données vide)

**Description**: Ce test vérifie que l'API retourne un tableau vide lorsque la base de données est vide.

**Résultat**: Le test a réussi. L'API a retourné un tableau vide comme prévu.

## Tests de Création et Récupération

### Devrait créer deux Todos

**Description**: Ce test vérifie que deux tâches peuvent être créées avec succès via l'API.

**Résultat**: Le test a réussi. Deux tâches ont été créées et leurs IDs ont été enregistrés.

### Devrait récupérer deux Todos après création

**Description**: Ce test vérifie que l'API retourne les deux tâches créées dans l'ordre par date.

**Résultat**: Le test a réussi. L'API a retourné les deux tâches dans l'ordre attendu.

## Tests de Mise à Jour

### Devrait mettre à jour la première tâche

**Description**: Ce test vérifie que la première tâche peut être mise à jour avec succès.

**Résultat**: Le test a réussi. La première tâche a été mise à jour conformément aux attentes.

### Devrait récupérer deux Todos après mise à jour

**Description**: Ce test vérifie que l'API retourne les deux tâches après la mise à jour, avec la première tâche mise à jour en premier.

**Résultat**: Le test a réussi. L'API a retourné les deux tâches dans l'ordre attendu après la mise à jour.

## Tests de Suppression

### Devrait supprimer la deuxième tâche

**Description**: Ce test vérifie que la deuxième tâche peut être supprimée avec succès.

**Résultat**: Le test a réussi. La deuxième tâche a été supprimée conformément aux attentes.

### Devrait récupérer une tâche après suppression

**Description**: Ce test vérifie que l'API retourne une seule tâche après la suppression de la deuxième tâche.

**Résultat**: Le test a réussi. L'API a retourné une seule tâche après la suppression.

## Conclusion

Tous les tests ont réussi avec succès, démontrant ainsi le bon fonctionnement de l'API Todo pour la gestion des tâches.

