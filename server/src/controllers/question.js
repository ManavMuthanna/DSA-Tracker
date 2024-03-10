// controllers/questionController.js
const fs = require('fs').promises;
const path = require('path');
const Question = require('../models/question');

async function insertQuestions() {
  try {
    const filePath = path.join(__dirname, 'questions.json');
    const jsonData = await fs.readFile(filePath, 'utf-8');
    const { questions } = JSON.parse(jsonData);

    // Iterate through the questions and update or insert them
    for (const question of questions) {
      const { name, topic, difficulty } = question;

      // Use a unique identifier, such as the question name, for the query
      const query = { name };

      // Define the update operation
      const update = {
        $set: { topic, difficulty },
      };

      // Use the 'upsert' option to insert if not found, update if found
      const options = { upsert: true };

      // Execute the update operation
      await Question.updateOne(query, update, options);
    }

    console.log('Data inserted or updated successfully');
  } catch (error) {
    console.error(error);
  }
}

async function getQuestions() {
    try {
      // Retrieve all questions from the MongoDB collection
      const questions = await Question.find({});
    
      return questions;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

module.exports = { insertQuestions, getQuestions };
