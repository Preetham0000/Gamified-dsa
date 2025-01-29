import React from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, Clock, Trophy } from 'lucide-react';

/**
 * Props interface for the QuizCard component
 * 
 * @property {string} id - Unique identifier for the quiz, used in routing
 * @property {string} title - Title of the quiz
 * @property {string} description - Brief description of quiz content
 * @property {number} questionCount - Number of questions in the quiz
 * @property {string} timeLimit - Time limit for completing the quiz (e.g., "30 mins")
 * @property {number} points - Points available for completing the quiz
 */
interface QuizCardProps {
  id: string;
  title: string;
  description: string;
  questionCount: number;
  timeLimit: string;
  points: number;
}

/**
 * QuizCard Component
 * 
 * A clickable card component that displays quiz information and links to the quiz.
 * Features hover effects and displays key information like time limit, question count,
 * and available points.
 *
 * @component
 * @example
 * ```tsx
 * <QuizCard
 *   id="basic-ds"
 *   title="Basic Data Structures"
 *   description="Test your knowledge of fundamental data structures"
 *   questionCount={10}
 *   timeLimit="15 mins"
 *   points={100}
 * />
 * ```
 */
const QuizCard: React.FC<QuizCardProps> = ({
  id,
  title,
  description,
  questionCount,
  timeLimit,
  points,
}) => {
  return (
    // Wrap card in Link component for navigation to quiz page
    <Link to={`/quiz/${id}`}>
      {/* Card container with hover effects */}
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-100">
        {/* Title section with icon */}
        <div className="flex items-center gap-3 mb-3">
          <HelpCircle className="w-5 h-5 text-purple-500" />
          <h3 className="font-semibold text-gray-900">{title}</h3>
        </div>
        
        {/* Quiz description */}
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        
        {/* Footer with quiz metadata */}
        <div className="flex items-center justify-between text-sm text-gray-600">
          {/* Time limit and question count */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{timeLimit}</span>
            </div>
            <span>{questionCount} questions</span>
          </div>
          
          {/* Points available */}
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4 text-yellow-500" />
            <span>{points} points</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default QuizCard;