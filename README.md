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
    cd abc-survery-app
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


# **surveyModule.js**

`createSurvey`({surveyId: int, name: string, description: string, createdAt: date}, createdBy:{employeeName: string, employeeRole: string}) : Cette fonction crée une nouvelle enquête.

`readSurvey() `: les détails de l'enquête spécifiée par l'ID.

`updateSurvey`(surveyId: int, {name: string, description: string, createdAt: date}) : Met à jour les informations de l'enquête spécifiée par l'ID avec les nouvelles données fournies dans `update`.

`deleteSurvey() `: Supprime l'enquête spécifiée par l'ID.



.

# **questionCrud.js**


`createQuestion`({questionId: int, surveyId: int, title: string, type: string, option: int}) : Cette fonction crée une nouvelle question pour une enquête spécifique.


`readQuestion() `: Cette fonction lit les détails de la question spécifiée par l'ID.



`updateQuestion`(questionId, {surveyId: int, name: string, type: string, option: int}) : Met à jour les informations de la question spécifiée par l'ID avec les nouvelles données fournies dans `update`.


`deleteQuestion()` : Supprime la question spécifiée par l'ID.

 # **responseCrud.js**



`createResponse`({responseId: int, questionId: int, title: string})
Crée une nouvelle réponse pour une question spécifique.



`readResponse() `: Lit les détails de la réponse spécifiée par l'ID.



`updateResponse`(responseId: int, {questionId: int, title: string})
Met à jour les informations de la réponse spécifiée par l'ID avec les nouvelles données fournies dans `update`.



`deleteResponse()` : Supprime la réponse spécifiée par l'ID.

## Author
[Mohamed Bankolé](https://github.com/medbankole97) 