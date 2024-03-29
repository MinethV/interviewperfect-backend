const request = require('supertest');
const mongoose = require('mongoose');
const app = require('./index'); // Import your Express app instance
const PORT = 3002;


describe('Test API endpoints', () => {
    beforeAll(async () => {
        // Connect to a test database only if connection is not already established
        if (mongoose.connection.readyState === 0) {
            await mongoose.connect('mongodb://localhost:27017/testInterviewPerfect', {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
                useCreateIndex: true
            });
        }
    });

    afterAll(async () => {
        // Disconnect from the test database after all tests are done
        await mongoose.connection.close();
    });


    beforeAll((done) => {
        mongoose.connection.once('open', () => {
            console.log('MongoDB connected');
            done();
        });
    });


    it('should create a new question', async () => {
        const res = await request(app)
            .post('/createQuestion')
            .send({
                industry: 'Technology',
                type: 'Technical',
                question: 'What is Node.js?',
                answer: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine.'
            });
        expect(res.statusCode).toEqual(200);
        // Add more assertions as needed
    });

    it('should retrieve all questions', async () => {
        const res = await request(app).get('/read');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array);
        // Add more assertions as needed
    });

    it('should retrieve a specific question by ID', async () => {
        // Assuming you have a question ID
        const question = await QuestionModel.findOne();
        const res = await request(app).get(`/getQuestion/${question._id}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body._id).toEqual(question._id.toString());
        // Add more assertions as needed
    });

    it('should update a question', async () => {
        // Assuming you have a question ID
        const question = await QuestionModel.findOne();
        const res = await request(app)
            .put(`/updateQuestion/${question._id}`)
            .send({
                industry: 'Updated Industry',
                type: 'Updated Type',
                question: 'Updated Question',
                answer: 'Updated Answer'
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body.industry).toEqual('Updated Industry');
        // Add more assertions as needed
    });

    it('should delete a question', async () => {
        // Assuming you have a question ID
        const question = await QuestionModel.findOne();
        const res = await request(app).delete(`/deleteQuestion/${question._id}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body._id).toEqual(question._id.toString());
        // Add more assertions as needed
    });
});