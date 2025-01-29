import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
// Imports React Router components for handling navigation

import { Provider } from 'react-redux'; 
// Provides the Redux store to the application

import { store } from './store'; 
// Imports the Redux store

// Layout and core components
import Navbar from './components/layout/Navbar'; 
import HomePage from './components/home/HomePage';
import AuthForm from './components/auth/AuthForm';

// Pages
import LearnPage from './pages/LearnPage';
import ProfilePage from './pages/ProfilePage';
import LeaderboardPage from './pages/LeaderboardPage';
import ProblemSolvingPage from './pages/ProblemSolvingPage';
import QuizListPage from './pages/QuizListPage';

// Learning Components
import StackVisualizer from './components/learning/StackVisualizer';
import InfixToPostfixGame from './components/learning/infixToPostfix/infixToPostfixGame';
import BasicConceptsPage from './pages/BasicConceptsPage';
import ArraysPage from './pages/ArraysPage';
import BasicAlgorithmsPage from './pages/BasicAlgorithmsPage';

// Quizzes
import ArraysQuiz from './components/quiz/ArraysQuiz';
import AlgorithmsQuiz from './components/quiz/AlgorithmsQuiz';
import BasicConceptsQuiz from './components/quiz/BasicConceptsQuiz';

// Route Protection
import ProtectedRoute from './components/routes/ProtectedRoute';
// Component that restricts access to certain routes for authenticated users

function App() {
  return (
    <Provider store={store}> 
      {/* Wraps the entire app with Redux provider to manage global state */}

      <Router> 
        {/* Enables routing in the application */}
        
        <div className="min-h-screen bg-gray-100">
          {/* Ensures the app takes at least the full height of the screen and has a light gray background */}

          <Navbar /> 
          {/* Navigation bar component */}

          <main>
            <Routes>
              {/* Defines different routes in the application */}

              <Route path="/" element={<HomePage />} /> 
              {/* Home page */}

              <Route path="/login" element={<AuthForm />} /> 
              {/* Login/Register form */}

              <Route path="/profile" element={<ProfilePage />} /> 
              {/* User profile page */}

              <Route path="/learn" element={<LearnPage />} /> 
              {/* Learning resources page */}

              <Route path="/leaderboard" element={<LeaderboardPage />} /> 
              {/* Leaderboard page */}

              <Route path="/problems" element={<ProblemSolvingPage />} /> 
              {/* Problem-solving practice page */}

              <Route path="/quizzes" element={<QuizListPage />} /> 
              {/* List of available quizzes */}

              <Route path="/learn/stack" element={<StackVisualizer onOperation={(op) => console.log(op)} />} /> 
              {/* Stack visualization tool */}

              <Route path="/learn/infix-postfix" element={<InfixToPostfixGame />} /> 
              {/* Infix to postfix conversion game */}

              <Route path="/learn/basics" element={<BasicConceptsPage />} /> 
              {/* Basic concepts learning page */}

              <Route path="/quiz/basics" element={<BasicConceptsQuiz />} /> 
              {/* Basic concepts quiz */}

              <Route path="/learn/arrays" element={<ArraysPage />} /> 
              {/* Learning page for arrays */}

              <Route path="/learn/algorithms" element={<BasicAlgorithmsPage />} /> 
              {/* Learning page for basic algorithms */}

              <Route path="/quiz/arrays" element={<ArraysQuiz />} /> 
              {/* Arrays quiz */}

              <Route path="/quiz/algorithms" element={<AlgorithmsQuiz />} /> 
              {/* Algorithms quiz */}

              <Route 
                path="/problems" 
                element={
                  <ProtectedRoute>
                    <ProblemSolvingPage />
                  </ProtectedRoute>
                }
              />
              {/* Protected route: Only accessible to authenticated users */}
              
            </Routes>
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App; 
// Exports the main App component
