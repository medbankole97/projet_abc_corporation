const { createSurvey, readSurvey, updateSurvey, deleteSurvey } = require('./surveyModule');
const { createQuestion, readQuestion, updateQuestion, deleteQuestion } = require('./questionCrud');
const { createResponse, readResponse, updateResponse, deleteResponse } = require('./responseCrud');

// Exemple de création d'une enquête
const newSurvey = {
  _id: 2,
  name: "Enquête de Satisfaction",
  description: "Enquête visant à évaluer la satisfaction des clients concernant nos produits.",
  createdAt: new Date(),
  createdBy: {
    employeeName: "Mamadou Ba",
    employeeRole: "Responsable entreprise"
  }
};

const newQuestion = {
  _id: 3,
  surveyId: newSurvey._id,
  title: "Comment évalueriez-vous notre service?",
  type: "rating",
  options: {
    minValue: 1,
    maxValue: 5,
    step: 1
  }
};

const newResponse = {
  _id: 5,
  surveyId: newSurvey._id,
  questionId: newQuestion._id,
  response: "Très bon",
  respondedAt: new Date()
};

(async () => {
  try {
    // Opérations pour l'enquête
    await createSurvey(newSurvey);
    const survey = await readSurvey(newSurvey._id);
    console.log("Enquête lue:", survey);
    await updateSurvey(newSurvey._id, { description: "Nouvelle description de l'enquête" });
    const updatedSurvey = await readSurvey(newSurvey._id);
    console.log("Enquête mise à jour:", updatedSurvey);
    await deleteSurvey(newSurvey._id);

    // Opérations pour la question
    await createQuestion(newQuestion);
    const question = await readQuestion(newQuestion._id);
    console.log("Question lue:", question);
    await updateQuestion(newQuestion._id, { title: "Comment évalueriez-vous notre service global?" });
    const updatedQuestion = await readQuestion(newQuestion._id);
    console.log("Question mise à jour:", updatedQuestion);
    await deleteQuestion(newQuestion._id);

    // Opérations pour la réponse
    await createResponse(newResponse);
    const response = await readResponse(newResponse._id);
    console.log("Réponse lue:", response);
    await updateResponse(newResponse._id, { response: "Excellent" });
    const updatedResponse = await readResponse(newResponse._id);
    console.log("Réponse mise à jour:", updatedResponse);
    await deleteResponse(newResponse._id);
  } catch (error) {
    console.error("Erreur lors de l'opération:", error);
  }
})();
