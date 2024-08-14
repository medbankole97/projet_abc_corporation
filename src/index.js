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
