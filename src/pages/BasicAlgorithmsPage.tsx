import React from 'react';
import { useNavigate } from 'react-router-dom';

const BasicAlgorithmsPage = () => {
  const navigate = useNavigate();

  const handleSolveProblemsClick = () => {
    navigate('/problems');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Basic Algorithms</h1>
      <p className="text-gray-700 mb-4">
        Basic algorithms are essential for understanding data structures and algorithms. They form the foundation for more advanced concepts.
      </p>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Algorithms</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Sorting Algorithms (Bubble Sort, Merge Sort, Quick Sort, etc.)</li>
        <li>Searching Algorithms (Linear Search, Binary Search, etc.)</li>
        <li>Recursion</li>
        <li>Dynamic Programming</li>
        <li>Greedy Algorithms</li>
      </ul>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Quiz</h2>
      <p className="text-gray-700 mb-4">
        Test your knowledge about basic algorithms by taking the quiz.
      </p>
      <a href="/quiz/algorithms" className="text-indigo-600 hover:underline">Take the Quiz</a>
      <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-6">Problems</h2>
      <p className="text-gray-700 mb-4">
        Practice solving problems related to basic algorithms.
      </p>
      <button
        onClick={handleSolveProblemsClick}
        className="text-indigo-600 hover:underline"
      >
        Solve Problems
      </button>
    </div>
  );
};

export default BasicAlgorithmsPage;