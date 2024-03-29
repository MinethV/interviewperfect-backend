import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import CreateQuestion from '../CreateQuestion';
import axios from 'axios';

// Mock axios post method
jest.mock('axios');

describe('CreateQuestion component', () => {
    test('renders without crashing', () => {
        render(<CreateQuestion />);
    });

    test('displays error messages for empty industry and type', async () => {
        const { getByText, getByTestId } = render(<CreateQuestion />);

        const createButton = getByText('Create');
        fireEvent.click(createButton);

        await waitFor(() => {
            expect(getByText('Please select an industry')).toBeInTheDocument();
            expect(getByText('Please select a type')).toBeInTheDocument();
        });
    });

    test('submits form with correct data', async () => {
        const { getByLabelText, getByText } = render(<CreateQuestion />);

        const industrySelect = getByLabelText('Industry selection');
        const typeSelect = getByLabelText('Type selection');
        const questionInput = getByLabelText('Question');
        const answerInput = getByLabelText('Answer');
        const createButton = getByText('Create');

        fireEvent.change(industrySelect, { target: { value: 'Software Engineering' } });
        fireEvent.change(typeSelect, { target: { value: 'Technical' } });
        fireEvent.change(questionInput, { target: { value: 'Test question' } });
        fireEvent.change(answerInput, { target: { value: 'Test answer' } });

        fireEvent.click(createButton);

        await waitFor(() => {
            expect(axios.post).toHaveBeenCalledWith('http://localhost:3001/createQuestion', {
                industry: 'Software Engineering',
                type: 'Technical',
                question: 'Test question',
                answer: 'Test answer',
            });
        });
    });
});
