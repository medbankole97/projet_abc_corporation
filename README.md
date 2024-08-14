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
    git clone <URL_DU_REPOSITORY>
    ```

2. **Accédez au dossier du projet :**

    ```bash
    cd survey-app
    ```

3. **Installez les dépendances :**

    ```bash
    npm install
    ```

4. **Configurez la base de données :**

    - Assurez-vous que MongoDB est en cours d'exécution sur votre machine locale.
    - Mettez les paramètres de connexion dans `config/database.js`.

## Utilisation

Pour démarrer l'application, exécutez la commande suivante :

```bash
npm start
```

## Authors

ABC Corporation

# Documentation des Fonctions et Exemples d'Utilisation

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

```javascript
const { createSurvey, readSurvey, updateSurvey, deleteSurvey } = require('./surveyModule');
const { createQuestion, readQuestion, updateQuestion, deleteQuestion } = require('./questionCrud');
const { createResponse, readResponse, updateResponse, deleteResponse } = require('./responseCrud');

// Exemple de création d'une enquête
const newSurvey = {
  _id: 3,
  name: "Enquête3 de Satisfaction",
  description: "Enquête visant à évaluer la satisfaction des clients concernant nos produits.",
  createdAt: new Date(),
  createdBy: {
    employeeName: "Mamadou Ba",
    employeeRole: "Responsable entreprise"
  }
};

(async () => {
  try {
    // Crée une nouvelle enquête
    await createSurvey(newSurvey);
    console.log('Nouvelle enquête créée avec succès.');

    // Lit l'enquête créée
    const survey = await readSurvey(newSurvey._id);
    console.log("Enquête lue:", survey);

    // Met à jour l'enquête
    const surveyUpdate = { description: "Nouvelle description de l'enquête" };
    await updateSurvey(newSurvey._id, surveyUpdate);
    console.log('Enquête mise à jour avec succès.');

    // Lit l'enquête mise à jour
    const updatedSurvey = await readSurvey(newSurvey._id);
    console.log("Enquête mise à jour:", updatedSurvey);

    // Supprime l'enquête
    await deleteSurvey(newSurvey._id);
    console.log("Enquête supprimée avec succès.");

    // Vous pouvez ajouter des opérations similaires pour les questions et les réponses
    // Exemple de création d'une nouvelle question
    const newQuestion = {
      questionId: 1,
      surveyId: newSurvey._id,
      title: "Comment évalueriez-vous notre service?",
      type: "rating",
      options: {
        minValue: 1,
        maxValue: 5,
        step: 1
      }
    };
    await createQuestion(newQuestion);
    console.log('Nouvelle question créée avec succès.');

    // Lire la question créée
    const question = await readQuestion(newQuestion.questionId);
    console.log("Question lue:", question);

    // Mettre à jour la question
    const questionUpdate = { title: "Comment évalueriez-vous notre service global?" };
    await updateQuestion(newQuestion.questionId, questionUpdate);
    console.log('Question mise à jour avec succès.');

    // Supprimer la question
    await deleteQuestion(newQuestion.questionId);
    console.log('Question supprimée avec succès.');

  } catch (error) {
    console.error("Erreur lors de l'opération:", error);
  }
})();

# Documentation des Fonctions JavaScript

## Module `surveyModule`

### Fonction `createSurvey`

#### Description
Crée une nouvelle enquête avec les détails fournis dans l'objet `survey`.

#### Arguments
- `survey` (Object) : Les détails de l'enquête à créer.
  - `survey._id` (Number) : L'identifiant unique de l'enquête.
  - `survey.name` (String) : Le nom de l'enquête.
  - `survey.description` (String) : La description de l'enquête.
  - `survey.createdAt` (Date) : La date de création de l'enquête.
  - `survey.createdBy` (Object) : Les informations sur la personne qui a créé l'enquête.
    - `survey.createdBy.employeeName` (String) : Le nom de l'employé.
    - `survey.createdBy.employeeRole` (String) : Le rôle de l'employé.

#### Retour
- (Promise) : Résultat de la création de l'enquête.

### Fonction `readSurvey`

#### Description
Lit les détails de l'enquête spécifiée par l'ID.

#### Arguments
- `id` (Number) : L'ID de l'enquête à lire.

#### Retour
- (Promise<Object>) : Détails de l'enquête.

### Fonction `updateSurvey`

#### Description
Met à jour les informations de l'enquête spécifiée par l'ID avec les nouvelles données fournies dans `update`.

#### Arguments
- `id` (Number) : L'ID de l'enquête à mettre à jour.
- `update` (Object) : Les nouvelles données pour l'enquête.
  - `update.description` (String) : Nouvelle description de l'enquête (par exemple).

#### Retour
- (Promise) : Résultat de la mise à jour de l'enquête.

### Fonction `deleteSurvey`

#### Description
Supprime l'enquête spécifiée par l'ID.

#### Arguments
- `id` (Number) : L'ID de l'enquête à supprimer.

#### Retour
- (Promise) : Résultat de la suppression de l'enquête.

## Module `questionCrud`

### Fonction `createQuestion`

#### Description
Crée une nouvelle question pour une enquête spécifique.

#### Arguments
- `question` (Object) : Les détails de la question à créer.
  - `question.questionId` (Number) : L'identifiant unique de la question.
  - `question.surveyId` (Number) : L'ID de l'enquête à laquelle la question est liée.
  - `question.title` (String) : Le texte de la question.
  - `question.type` (String) : Le type de question (par exemple, "rating").
  - `question.options` (Object) : Options supplémentaires pour la question, telles que les valeurs minimales et maximales pour une échelle de notation.

#### Retour
- (Promise) : Résultat de la création de la question.

### Fonction `readQuestion`

#### Description
Lit les détails de la question spécifiée par l'ID.

#### Arguments
- `id` (Number) : L'ID de la question à lire.

#### Retour
- (Promise<Object>) : Détails de la question.

### Fonction `updateQuestion`

#### Description
Met à jour les informations de la question spécifiée par l'ID avec les nouvelles données fournies dans `update`.

#### Arguments
- `id` (Number) : L'ID de la question à mettre à jour.
- `update` (Object) : Les nouvelles données pour la question.
  - `update.title` (String) : Nouveau texte de la question (par exemple).

#### Retour
- (Promise) : Résultat de la mise à jour de la question.

### Fonction `deleteQuestion`

#### Description
Supprime la question spécifiée par l'ID.

#### Arguments
- `id` (Number) : L'ID de la question à supprimer.

#### Retour
- (Promise) : Résultat de la suppression de la question.

## Module `responseCrud`

### Fonction `createResponse`

#### Description
Crée une nouvelle réponse pour une question spécifique.

#### Arguments
- `response` (Object) : Les détails de la réponse à créer.
  - `response.responseId` (Number) : L'identifiant unique de la réponse.
  - `response.questionId` (Number) : L'ID de la question à laquelle la réponse est liée.
  - `response.answer` (Number/String) : La réponse donnée (peut varier selon le type de question).

#### Retour
- (Promise) : Résultat de la création de la réponse.

### Fonction `readResponse`

#### Description
Lit les détails de la réponse spécifiée par l'ID.

#### Arguments
- `id` (Number) : L'ID de la réponse à lire.

#### Retour
- (Promise<Object>) : Détails de la réponse.

### Fonction `updateResponse`

#### Description
Met à jour les informations de la réponse spécifiée par l'ID avec les nouvelles données fournies dans `update`.

# Arguments
- `id` (Number) : L'ID de la réponse à mettre à jour.
- `update` (Object) : Les nouvelles données pour la réponse.
  - `update.answer` (Number/String) : Nouvelle réponse donnée (peut varier selon le type de question).

#### Retour
- (Promise) : Résultat de la mise à jour de la réponse.

### Fonction `deleteResponse`

#### Description
Supprime la réponse spécifiée par l'ID.

#### Arguments
- `id` (Number) : L'ID de la réponse à supprimer.

#### Retour
- (Promise) : Résultat de la suppression de la réponse.
