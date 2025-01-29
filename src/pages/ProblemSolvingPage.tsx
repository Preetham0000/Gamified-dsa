import React from 'react';
// Importing icons from lucide-react for search and filter functionality
import { Code, Filter, Search } from 'lucide-react';
// Importing the ProblemCard component to display individual problem details
import ProblemCard from '../components/challenges/ProblemCard';

// Array of problems with data like title, difficulty, time estimate, etc.
const problems = [
  {
    id: '1', // Unique identifier for the problem
    title: 'Two Sum', // Problem title
    difficulty: 'Easy', // Problem difficulty level
    category: 'Arrays', // Category of the problem (e.g., Arrays, Stack)
    timeEstimate: '15 mins', // Estimated time to solve the problem
    successRate: 75, // Success rate of users solving this problem
  },
  {
    id: '2',
    title: 'Valid Parentheses',
    difficulty: 'Easy',
    category: 'Stack',
    timeEstimate: '20 mins',
    successRate: 68,
  },
  {
    id: '3',
    title: 'Merge Sorted Arrays',
    difficulty: 'Medium',
    category: 'Arrays',
    timeEstimate: '25 mins',
    successRate: 55,
  },
  {
    id: '4',
    title: 'Binary Search',
    difficulty: 'Easy',
    category: 'Algorithms',
    timeEstimate: '15 mins',
    successRate: 72,
  },
] as const;

const ProblemSolvingPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <div>
          {/* Title of the page */}
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Practice Problems</h1>
          {/* Description of the page */}
          <p className="text-gray-600">Solve coding challenges to improve your skills</p>
        </div>

        {/* Search and Filter buttons */}
        <div className="flex items-center gap-4">
          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search problems..."
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

      {/* Displaying problems in a grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Mapping through the problems array and rendering a ProblemCard for each problem */}
        {problems.map((problem) => (
          // Passing the problem data as props to the ProblemCard component
          <ProblemCard key={problem.id} {...problem} />
        ))}
      </div>
    </div>
  );
}

export default ProblemSolvingPage;
