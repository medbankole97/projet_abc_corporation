const { connect } = require('./config/database');

// Create a new response
async function createResponse(response) {
  const { db, client } = await connect();
  try {
    const existingResponse = await db.collection('responses').findOne({ _id: response._id });
    if (existingResponse) {
      console.log('Response with this _id already exists');
      return; 
    }

    const result = await db.collection('responses').insertOne(response);
    console.log(`New response created with the following id: ${result.insertedId}`);
  } finally {
    await client.close();
  }
}

// Read a response by id
async function readResponse(responseId) {
  const { db, client } = await connect();
  try {
    const response = await db.collection('responses').findOne({ _id: responseId });
    if (!response) {
      console.log('Response not found');
    }
    return response;
  } finally {
    await client.close();
  }
}

// Update a response by id
async function updateResponse(responseId, update) {
  const { db, client } = await connect();
  try {
    const existingResponse = await db.collection('responses').findOne({ _id: responseId });
    if (!existingResponse) {
      console.log('No response found with the given _id');
      return;
    }

    const result = await db.collection('responses').updateOne({ _id: responseId }, { $set: update });
    console.log(`${result.matchedCount} response(s) matched the filter, updated ${result.modifiedCount} response(s)`);
  } finally {
    await client.close();
  }
}

// Delete a response by id
async function deleteResponse(responseId) {
  const { db, client } = await connect();
  try {
    const existingResponse = await db.collection('responses').findOne({ _id: responseId });
    if (!existingResponse) {
      console.log('No response found with the given _id');
      return;
    }

    const result = await db.collection('responses').deleteOne({ _id: responseId });
    console.log(`Deleted ${result.deletedCount} response(s)`);
  } finally {
    await client.close();
  }
}

module.exports = { createResponse, readResponse, updateResponse, deleteResponse };
