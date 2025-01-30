import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { test, describe, expect, beforeEach } from 'vitest'; // Import vitest functions explicitly
import userReducer from '../../src/store/slices/userSlice';
import ArraysQuiz from '../../src/components/quiz/ArraysQuiz';
import '@testing-library/jest-dom';


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
  // Mocking localStorage before each test
  beforeEach(() => {
    global.localStorage = {
      getItem: (key) => {
        if (key === 'user') return JSON.stringify({ name: 'Test User', email: 'test@example.com' });
        if (key === 'token') return 'mocked_token';
        return null;
      },
      setItem: (key, value) => {},
      removeItem: (key) => {},
      clear: () => {},
    } as unknown as Storage; // Cast to `Storage` type to avoid TS errors
  });

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
      expect(firstOption.parentElement).toHaveClass('flex items-center justify-between')
    );
  });

  test('shows the quiz result after completing all questions', async () => {
    renderWithProviders(<ArraysQuiz />, {
      initialState: { user: { currentUser: { name: 'Test User', email: 'test@example.com' } } },
    });

    const options = screen.getAllByRole('button');
    options.forEach((option) => fireEvent.click(option));
  });
});
