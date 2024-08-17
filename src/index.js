const { createSurvey, getSurveys, getSurveyById, updateSurvey, deleteSurvey } = require('./surveyModule');
const { createQuestion, getQuestions, getQuestionById, updateQuestion, deleteQuestion } = require('./questionModule');
const { createAnswer, getAnswers, getAnswerById, updateAnswer, deleteAnswer } = require('./answerModule');

// Assuming there's a closeConnection function
const { closeConnection } = require('./config/database');

        // Gestion des Enquetes
async function run() {
    try {
        const newSurvey = {   
            id: 2,
            name: "Enquête de Satisfaction 001",
            description: "Enquête visant à évaluer la satisfaction des clients concernant nos services.",
            createdAt: "2024-07-25T08:00:00Z",
            createdBy: {
                employeeName: "Mamadou Ba",
                employeeRole: "Responsable du service client"
            }
        };
        await createSurvey(newSurvey);

        await getSurveys();
        await updateSurvey(2, { name: "Enquête de Satisfaction Mise à Jour" });
        await getSurveyById(2);
        await deleteSurvey(2);

        // Gestion des Questions
        const newQuestion = {
            id: 2,
            surveyId: 2,
            title: "Comment évalueriez-vous notre service ?",
            type: "rating",
            options: {
                minValue: 1,
                maxValue: 5,
                step: 1
            }
        };
        await createQuestion(newQuestion);

        await getQuestions();
        await getQuestionById(2);
        await updateQuestion(2, { title: "Comment avez-vous entendu parler de nous ?" });
        await deleteQuestion(2);

        // Gestion des Réponses
        const newAnswer = {
            id: 2,
            questionId: 2,
            title: "Satisfait"
        };
        await createAnswer(newAnswer);

        await getAnswers();
        await getAnswerById(2);
        await updateAnswer(2, { title: "Très satisfait" });
        await deleteAnswer(2);
    } catch (error) {
        console.error("Une erreur s'est produite:", error);
    } finally {
        await closeConnection();
        console.log("Connexion fermée.");
    }
}

run();
