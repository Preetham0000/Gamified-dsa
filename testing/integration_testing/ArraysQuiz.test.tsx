import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import '@testing-library/jest-dom';
import userReducer from '../../src/store/slices/userSlice';
import ArraysQuiz from '../../src/components/quiz/ArraysQuiz';

const renderWithProviders = (ui: React.ReactNode, { initialState = {} } = {}) => {
  const store = configureStore({
    reducer: { user: userReducer },
    preloadedState: initialState,
  });

  return render(
    <Provider store={store}>
      <MemoryRouter>{ui}</MemoryRouter>
    </Provider>
  );
};

describe('ArraysQuiz Component', () => {
  test('renders the "Please log in" message for unauthenticated users', () => {
    renderWithProviders(<ArraysQuiz />, {
      initialState: { user: { currentUser: null } },
    });

    expect(screen.getByText('Please log in to take the quiz.')).toBeInTheDocument();
  });

  test('renders the quiz for authenticated users', () => {
    renderWithProviders(<ArraysQuiz />, {
      initialState: { user: { currentUser: { name: 'Test User', email: 'test@example.com' } } },
    });

    expect(screen.getByText('Question 1 of 3')).toBeInTheDocument();
  });

  test('allows the user to select an answer and shows feedback', async () => {
    renderWithProviders(<ArraysQuiz />, {
      initialState: { user: { currentUser: { name: 'Test User', email: 'test@example.com' } } },
    });

    const firstOption = screen.getByText('O(1)');
    fireEvent.click(firstOption);

    await waitFor(() =>
      expect(firstOption.parentElement).toHaveClass('bg-green-50 border-green-500')
    );
  });

  test('shows the quiz result after completing all questions', async () => {
    renderWithProviders(<ArraysQuiz />, {
      initialState: { user: { currentUser: { name: 'Test User', email: 'test@example.com' } } },
    });

    const options = screen.getAllByRole('button');
    options.forEach((option) => fireEvent.click(option));

    await waitFor(() =>
      expect(screen.getByText('Quiz Complete!')).toBeInTheDocument()
    );

    expect(screen.getByText('Continue Learning')).toBeInTheDocument();
  });
});
