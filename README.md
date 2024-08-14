# Survey App

## Description

Survey App est une application JavaScript simple permettant de gérer les fiches d'enquête de satisfaction des clients. L'application utilise une base de données MongoDB pour stocker les données et permet d'effectuer des opérations CRUD (Create, Read, Update, Delete) sur ces fiches.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- [Node.js](https://nodejs.org/) (version 12 ou supérieure)
- [MongoDB](https://www.mongodb.com/try/download/community) (version 4.0 ou supérieure)

## Installation

Suivez ces étapes pour configurer le projet sur votre machine locale :

1. **Clonez le repository :**

    ```bash
    git clone https://github.com/medbankole97/projet_abc_corporation.git
    ```

2. **Accédez au dossier du projet :**

    ```bash
    cd survey-app
    ```

3. **Installez les dépendances :**

    ```bash
    npm install
    ```
3. **Installez mongodb :**

    ```mongodb
    npm install mongodb
    ```


5. **Configurez la base de données :**

    - Assurez-vous que MongoDB est en cours d'exécution sur votre machine locale.
    - Mettez les paramètres de connexion dans `config/database.js`.

## Utilisation

Pour démarrer l'application, exécutez la commande suivante :

```bash
npm start
```



# 6. Documentation des Fonctions et Exemples d'Utilisation

Ce fichier montre comment utiliser les fonctions pour gérer les enquêtes, les questions et les réponses.

## Importation des Modules

```javascript
const { createSurvey, readSurvey, updateSurvey, deleteSurvey } = require('./surveyModule');
const { createQuestion, readQuestion, updateQuestion, deleteQuestion } = require('./questionCrud');
const { createResponse, readResponse, updateResponse, deleteResponse } = require('./responseCrud');

# Documentation des Fonctions JavaScript

## Modules Importés

- `createSurvey`, `readSurvey`, `updateSurvey`, `deleteSurvey` : Fonctions pour gérer les enquêtes.
- `createQuestion`, `readQuestion`, `updateQuestion`, `deleteQuestion` : Fonctions pour gérer les questions.
- `createResponse`, `readResponse`, `updateResponse`, `deleteResponse` : Fonctions pour gérer les réponses.

## Exemple de Création, Lecture, Mise à Jour et Suppression d une Enquête

### Description
Cet exemple montre comment créer, lire, mettre à jour et supprimer une enquête en utilisant les fonctions fournies par le module `surveyModule`.

### Code Complet


# Documentation des Fonctions JavaScript

## Module `surveyModule`
````
### Fonction `createSurvey`

#### Description
Crée une nouvelle enquête avec les détails fournis dans l'objet `survey`.
````
### Fonction `readSurvey`

#### Description
Lit les détails de l'enquête spécifiée par l'ID.

````
## Fonction `updateSurvey`

#### Description
Met à jour les informations de l'enquête spécifiée par l'ID avec les nouvelles données fournies dans `update`.

## Fonction `deleteSurvey`

#### Description
Supprime l'enquête spécifiée par l'ID.

## Module `questionCrud`
````
## Fonction `createQuestion`

#### Description
Crée une nouvelle question pour une enquête spécifique.
## Fonction `readQuestion`

#### Description
Lit les détails de la question spécifiée par l'ID.
````
## Fonction `updateQuestion`

#### Description
Met à jour les informations de la question spécifiée par l'ID avec les nouvelles données fournies dans `update`.
````
## Fonction `deleteQuestion`

#### Description
Supprime la question spécifiée par l'ID.
````
# Module `responseCrud`

### Fonction `createResponse`

#### Description
Crée une nouvelle réponse pour une question spécifique.
````
### Fonction `readResponse`

#### Description
Lit les détails de la réponse spécifiée par l'ID.
````
## Fonction `updateResponse`

#### Description
Met à jour les informations de la réponse spécifiée par l'ID avec les nouvelles données fournies dans `update`.


## Fonction `deleteResponse`
````
##Description
Supprime la réponse spécifiée par l'ID.
````
## Authors
ABC Corporation