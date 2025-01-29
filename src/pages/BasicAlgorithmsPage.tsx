/**
 * BasicAlgorithmsPage Component
 * 
 * A landing page component that introduces basic algorithms concepts and
 * provides navigation to related learning resources like quizzes and practice problems.
 * 
 * Features:
 * - Overview of common algorithms
 * - Links to quizzes and practice problems
 * - Responsive layout with maximum width constraint
 */
import React from 'react';

const BasicAlgorithmsPage = () => {
  return (
    // Main container with responsive max width and padding
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Page title */}
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Basic Algorithms</h1>
      
      {/* Introduction paragraph */}
      <p className="text-gray-700 mb-4">
        Basic algorithms are essential for understanding data structures and algorithms. They form the foundation for more advanced concepts.
      </p>
      
      {/* Common Algorithms section */}
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Algorithms</h2>
      {/* List of fundamental algorithm categories */}
      <ul className="list-disc list-inside mb-4">
        <li>Sorting Algorithms (Bubble Sort, Merge Sort, Quick Sort, etc.)</li>
        <li>Searching Algorithms (Linear Search, Binary Search, etc.)</li>
        <li>Recursion</li>
        <li>Dynamic Programming</li>
        <li>Greedy Algorithms</li>
      </ul>
      
      {/* Quiz section with navigation link */}
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Quiz</h2>
      <p className="text-gray-700 mb-4">
        Test your knowledge about basic algorithms by taking the quiz.
      </p>
      <a href="/quiz/algorithms" className="text-indigo-600 hover:underline">
        Take the Quiz
      </a>
      
      {/* Practice Problems section with navigation link */}
      <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-6">Problems</h2>
      <p className="text-gray-700 mb-4">
        Practice solving problems related to basic algorithms.
      </p>
      <a href="/problems/algorithms" className="text-indigo-600 hover:underline">
        Solve Problems
      </a>
    </div>
  );
};

export default BasicAlgorithmsPage;