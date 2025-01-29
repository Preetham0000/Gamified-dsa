import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BookOpen, Trophy, User, Home, Code, HelpCircle } from 'lucide-react';
import type { RootState } from '../../store';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: RootState) => state.user);

  return (
    <nav className="bg-red-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 hover:text-indigo-200"
            >
              <BookOpen className="w-8 h-8" />
              <span className="font-bold text-xl">DSA Master</span>
            </button>
          </div>~

          <div className="flex items-center space-x-6">
            <button
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 hover:text-indigo-200"
            >
              <Home className="w-5 h-5" />
              <span>Home</span>
            </button>

            <button
              onClick={() => navigate('/learn')}
              className="flex items-center space-x-2 hover:text-indigo-200"
            >
              <BookOpen className="w-5 h-5" />
              <span>Learn</span>
            </button>

            <button
              onClick={() => navigate('/problems')}
              className="flex items-center space-x-2 hover:text-indigo-200"
            >
              <Code className="w-5 h-5" />
              <span>Problems</span>
            </button>

            <button
              onClick={() => navigate('/quizzes')}
              className="flex items-center space-x-2 hover:text-indigo-200"
            >
              <HelpCircle className="w-5 h-5" />
              <span>Quizzes</span>
            </button>

            <button
              onClick={() => navigate('/leaderboard')}
              className="flex items-center space-x-2 hover:text-indigo-200"
            >
              <Trophy className="w-5 h-5" />
              <span>Leaderboard</span>
            </button>

            {currentUser ? (
              <button
                onClick={() => navigate('/profile')}
                className="flex items-center space-x-2 hover:text-indigo-200"
              >
                <User className="w-5 h-5" />
                <span>{currentUser.username}</span>
              </button>
            ) : (
              <button
                onClick={() => navigate('/login')}
                className="bg-white text-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-100"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;