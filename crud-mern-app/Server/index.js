const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const QuestionModel = require('./models/Questions');

//----------------------------------

// const db = require('.connection')
//
// require ('dotenv').config();
// const connectionParams = {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true
// }
// const url = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.lkfpc3n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
// const connect = mongoose.connect(url, connectionParams).then(() => console.log('connected to be'))
//     .catch(err => console.log('error',err));
// module.exports = connect;
//---------------------------------------

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://sasirujayawardhana:3SwHrqHeZa9P@cluster0.lkfpc3n.mongodb.net/InterviewPerfect?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
    console.log('MongoDB connected');
});

app.get("/read", (req,res) => {
    QuestionModel.find({})
        .then(Questions => res.json(Questions))
        .catch(err => res.json(err))
})

app.get('/getQuestion/:id', (req,res) => {
    const id = req.params.id;
    QuestionModel.findById({_id:id})
        .then(Questions => res.json(Questions))
        .catch(err => res.json(err))
})

app.delete('/deleteQuestion/:id', (req,res) => {
    const id = req.params.id;
    QuestionModel.findByIdAndDelete({_id:id})
        .then(Questions => res.json(Questions))
        .catch(err => res.json(err))
})

app.put('/updateQuestion/:id', (req,res) => {
    const id = req.params.id;
    QuestionModel.findByIdAndUpdate({_id:id}, {
        industry: req.body.industry,
        type: req.body.type,
        question: req.body.question,
        answer: req.body.answer
    })
        .then(Questions => res.json(Questions))
        .catch(err => res.json(err))
})

app.post("/createQuestion",(req,res) => {
    QuestionModel.create(req.body)
        .then(Questions => res.json(Questions))
        .catch(err => res.json(err))
})
app.listen(3001, () => {
    console.log('Server is running on port 3001');
})