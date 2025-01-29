import React from 'react';
// Importing icons from lucide-react for search, filter, and help icons
import { HelpCircle, Filter, Search } from 'lucide-react';
// Importing the QuizCard component to display individual quiz information
import QuizCard from '../components/quiz/QuizCard';

// Array containing quiz data (title, description, etc.)
const quizzes = [
  {
    id: '1', // Unique identifier for each quiz
    title: 'Array Operations Basics',
    description: 'Test your knowledge of fundamental array operations and manipulations.',
    questionCount: 10, // Number of questions in the quiz
    timeLimit: '15 mins', // Time limit for completing the quiz
    points: 100, // Points awarded for completing the quiz
  },
  {
    id: '2',
    title: 'Searching Algorithms',
    description: 'Questions about linear search, binary search, and their applications.',
    questionCount: 8,
    timeLimit: '12 mins',
    points: 80,
  },
  {
    id: '3',
    title: 'Basic Sorting Techniques',
    description: 'Test your understanding of bubble sort, selection sort, and insertion sort.',
    questionCount: 12,
    timeLimit: '20 mins',
    points: 120,
  },
] as const;

const QuizListPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <div>
          {/* Title of the page */}
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Practice Quizzes</h1>
          {/* Description under the title */}
          <p className="text-gray-600">Test your knowledge with interactive quizzes</p>
        </div>
        
        {/* Search and Filter Buttons */}
        <div className="flex items-center gap-4">
          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search quizzes..."
              className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {/* Search Icon */}
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          </div>
          
          {/* Filter Button */}
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
            <Filter className="w-5 h-5" />
            Filter
          </button>
        </div>
      </div>

      {/* Quiz List Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Mapping through the quizzes array and rendering a QuizCard for each quiz */}
        {quizzes.map((quiz) => (
          // Passing individual quiz data to QuizCard component as props
          <QuizCard key={quiz.id} {...quiz} />
        ))}
      </div>
    </div>
  );
}

export default QuizListPage;
