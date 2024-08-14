// src/config/surveyModule.js
const { connect } = require('./config/database');
const { ObjectId } = require('mongodb');

// Crée une nouvelle enquête
async function createSurvey(survey) {
  const { db, client } = await connect();
  try {
    // Vérifie si une enquête avec le même _id existe déjà
    const existingSurvey = await db.collection('surveys').findOne({ _id: survey._id });
    if (existingSurvey) {
      console.log('Survey with this _id already exists');
      return; // Sortir de la fonction si le document existe déjà
    }

    // Insère la nouvelle enquête
    const result = await db.collection('surveys').insertOne(survey);
    console.log(`New survey created with the following id: ${result.insertedId}`);
  } catch (error) {
    console.error('Error creating survey:', error);
  } finally {
    await client.close();
  }
}

// Lit une enquête par id
async function readSurvey(surveyId) {
  const { db, client } = await connect();
  try {
    const survey = await db.collection('surveys').findOne({ _id: surveyId });
    if (!survey) {
      console.log('Survey not found');
    }
    return survey;
  } catch (error) {
    console.error('Error reading survey:', error);
  } finally {
    await client.close();
  }
}

// Met à jour une enquête par id
async function updateSurvey(surveyId, updates) {
  const { db, client } = await connect();
  try {
    const result = await db.collection('surveys').updateOne({ _id: surveyId }, { $set: updates });
    if (result.matchedCount === 0) {
      console.log('No survey found with the given _id');
    } else {
      console.log(`${result.matchedCount} survey(s) matched the filter, updated ${result.modifiedCount} survey(s)`);
    }
  } catch (error) {
    console.error('Error updating survey:', error);
  } finally {
    await client.close();
  }
}

// Supprime une enquête par id
async function deleteSurvey(surveyId) {
  const { db, client } = await connect();
  try {
    const result = await db.collection('surveys').deleteOne({ _id: surveyId });
    if (result.deletedCount === 0) {
      console.log('No survey found with the given _id');
    } else {
      console.log(`Deleted ${result.deletedCount} survey(s)`);
    }
  } catch (error) {
    console.error('Error deleting survey:', error);
  } finally {
    await client.close();
  }
}

module.exports = {
  createSurvey,
  readSurvey,
  updateSurvey,
  deleteSurvey
};
