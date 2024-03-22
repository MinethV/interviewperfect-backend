const mongoose = require('mongoose');
const  QuestionSchema = new mongoose.Schema({
    industry: String,
    type: String,
    question: String,
    answer: String
});
const QuestionModel = mongoose.model("Questions", QuestionSchema, 'Questions');
module.exports = QuestionModel;