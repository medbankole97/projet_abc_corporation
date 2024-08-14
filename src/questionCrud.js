// src/config/questionCrud.js
const { connect } = require('./config/database');

// Create a new question
async function createQuestion(question) {
  const { db, client } = await connect();
  try {
    const result = await db.collection('questions').insertOne(question);
    console.log(`New question created with the following id: ${result.insertedId}`);
  } finally {
    await client.close();
  }
}

// Read a question by id
async function readQuestion(questionId) {
  const { db, client } = await connect();
  try {
    const question = await db.collection('questions').findOne({ _id: questionId });
    console.log(question);
    return question;
  } finally {
    await client.close();
  }
}

// Update a question by id
async function updateQuestion(questionId, update) {
  const { db, client } = await connect();
  try {
    const result = await db.collection('questions').updateOne({ _id: questionId }, { $set: update });
    console.log(`${result.matchedCount} question(s) matched the filter, updated ${result.modifiedCount} question(s)`);
  } finally {
    await client.close();
  }
}

// Delete a question by id
async function deleteQuestion(questionId) {
  const { db, client } = await connect();
  try {
    const result = await db.collection('questions').deleteOne({ _id: questionId });
    console.log(`Deleted ${result.deletedCount} question(s)`);
  } finally {
    await client.close();
  }
}

module.exports = { createQuestion, readQuestion, updateQuestion, deleteQuestion };
