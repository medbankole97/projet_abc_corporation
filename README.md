# *Survey App*

## *Description*

Survey App est une application JavaScript simple permettant de gérer les fiches d'enquête de satisfaction des clients. L'application utilise une base de données MongoDB pour stocker les données et permet d'effectuer des opérations CRUD (Create, Read, Update, Delete) sur ces fiches.

## *Prérequis*

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- [Node.js](https://nodejs.org/) (version 12 ou supérieure)
- [MongoDB](https://www.mongodb.com/try/download/community) (version 4.0 ou supérieure)

## *Installation*

Suivez ces étapes pour configurer le projet sur votre machine locale :

1. **Clonez le repository :**

    ```bash
    git clone https://github.com/medbankole97/projet_abc_corporation.git
    ```

2. **Accédez au dossier du projet :**

    ```bash
    cd projet_abc_corporation
    ```

3. **Installez les dépendances :**

    ```bash
    npm install
    ```
 
4. **Configurez la base de données :**

    - Assurez-vous que MongoDB est en cours d'exécution sur votre machine locale.
    - Mettez les paramètres de connexion dans `config/database.js`.

## *Utilisation*

Pour démarrer l'application, exécutez la commande suivante :

```bash
npm start
```



### 5. ***Documentation des Fonctions***

Ce fichier montre comment utiliser les fonctions pour gérer les enquêtes, les questions et les réponses.


## Modules et Fonctions

### surveyModule.js

Ce module permet de gérer les opérations CRUD de la collection `surveys`. Il est composé des fonctions suivantes :

- #### `createSurvey({ id, name, description, createdAt }, createdBy : {employeeName, employeeRole})`
  -  Ajoute un document dans la collection `surveys`.
  - **Paramètres**:
    - `id` (int): ID de l'enquête.
    - `name` (string): Nom de l'enquête.
    - `description` (string): Description de l'enquête.
    - `createdAt` (date): Date de création de l'enquête.
    - `createdBy` (objet): Détails de l'employé qui a créé l'enquête (nom et rôle).
    - `employeeName`(string) :Nom de l'employé.
    - `employeeRole`(string) :Rôle de l'employé .
  

- #### `getSurveys()`
  -  Affiche tous les documents de la collection `surveys`.
  - **Paramètres**: Aucun.
 

- #### `getSurveyById(surveyId)`
  -  Récupère une enquête par son ID.
  - **Paramètres**:
    - `surveyId` (int): ID de l'enquête à récupérer.


- #### `updateSurvey(surveyId, { name, description, createdAt })`
  -  Modifie un document de la collection `surveys`.
  - **Paramètres**:
    - `surveyId` (int): ID de l'enquête à mettre à jour.
    - `name` (string): Nouveau nom de l'enquête.
    - `description` (string): Nouvelle description de l'enquête.
    - `createdAt` (date): Nouvelle date de création de l'enquête.


- #### `deleteSurvey(surveyId)`
  -  Supprime un document de la collection `surveys`.
  - **Paramètres**:
    - `surveyId` (int): ID de l'enquête à supprimer.
 

### questionModule.js

Ce module permet de gérer les opérations CRUD de la collection `survey_questions`. Il est composé des fonctions suivantes :

- #### `createQuestion({ id, surveyId, title, type, options })`
  -  Ajoute un document dans la collection `survey_questions`.
  - **Paramètres**:
    - `id` (int): ID de la question.
    - `surveyId` (int): ID de l'enquête associée.
    - `title` (string): Titre de la question.
    - `type` (string): Type de la question (par exemple, "rating").
    - `options` (objet): Options spécifiques à la question (par exemple, minValue, maxValue, step pour une question de type "rating").
  -

- #### `getQuestions()`
  -  Affiche tous les documents dans la collection `survey_questions`.
  - **Paramètres**: Aucun.


- #### `getQuestionById(questionId)`
  -  Récupère une question par son ID.
  - **Paramètres**:
    - `questionId` (int): ID de la question à récupérer.
 

- #### `updateQuestion(questionId, { surveyId, title, type, options })`
  -  Modifie un document de la collection `survey_questions`.
  - **Paramètres**:
    - `questionId` (int): ID de la question à mettre à jour.
    - `surveyId` (int): ID de l'enquête associée.
    - `title` (string): Nouveau titre de la question.
    - `type` (string): Nouveau type de la question.
    - `options` (objet): Nouvelles options de la question.
  

- #### `deleteQuestion(questionId)`
  -  Supprime un document de la collection `survey_questions`.
  - **Paramètres**:
    - `questionId` (int): ID de la question à supprimer.


### answerModule.js

Ce module permet de gérer les opérations CRUD de la collection `survey_answers`. Il est composé des fonctions suivantes :

- #### `createAnswer({ id, questionId, title })`
  -  Ajoute un document dans la collection `survey_answers`.
  - **Paramètres**:
    - `id` (int): ID de la réponse.
    - `questionId` (int): ID de la question associée.
    - `title` (string): Titre de la réponse.
 

- #### `getAnswers()`
  -  Affiche tous les documents dans la collection `survey_answers`.
  - **Paramètres**: Aucun.
 

- #### `getAnswerById(answerId)`
  -  Récupère une réponse par son ID.
  - **Paramètres**:
    - `answerId` (int): ID de la réponse à récupérer.
 

- #### `updateAnswer(answerId, { questionId, title })`
  -  Modifie un document de la collection `survey_answers`.
  - **Paramètres**:
    - `answerId` (int): ID de la réponse à mettre à jour.
    - `questionId` (int): ID de la question associée.
    - `title` (string): Nouveau titre de la réponse.
  

- #### `deleteAnswer(answerId)`
  -  Supprime un document de la collection `survey_answers`.
  - **Paramètres**:
    - `answerId` (int): ID de la réponse à supprimer.
  



## Author
[Mohamed Bankolé](https://github.com/medbankole97) 