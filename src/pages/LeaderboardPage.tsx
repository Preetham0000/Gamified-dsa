import React, { useState } from 'react';
import LeaderboardTabs from '../components/leaderboard/LeaderboardTabs';
import LeaderboardTable from '../components/leaderboard/LeaderboardTable';
import TimeFilter from '../components/leaderboard/TimeFilter';

// Mock data structure representing different leaderboard categories
// Each category contains an array of user entries with their respective stats
// TODO: Replace with actual API calls in production
const mockLeaderboardData = {
  // Overall leaderboard showing combined performance across all activities
  overall: [
    { rank: 1, username: "CodeMaster", score: 1500, solved: 120, streak: 15 },
    { rank: 2, username: "AlgoNinja", score: 1350, solved: 110, streak: 12 },
    { rank: 3, username: "ByteWarrior", score: 1200, solved: 95, streak: 8 },
    // Add more entries...
  ],
  
  // Challenge-specific leaderboard tracking programming challenge performance
  challenges: [
    { rank: 1, username: "ProblemSolver", score: 850, solved: 75, streak: 10 },
    { rank: 2, username: "CodeMaster", score: 800, solved: 70, streak: 15 },
    { rank: 3, username: "AlgoExpert", score: 750, solved: 65, streak: 7 },
    // Add more entries...
  ],
  
  // Quiz-specific leaderboard tracking quiz performance
  quizzes: [
    { rank: 1, username: "QuizWhiz", score: 950, solved: 45, streak: 20 },
    { rank: 2, username: "ByteWarrior", score: 900, solved: 42, streak: 8 },
    { rank: 3, username: "DSAMaster", score: 850, solved: 40, streak: 5 },
    // Add more entries...
  ],
};

/**
 * LeaderboardPage Component
 * 
 * Main component for displaying the leaderboard interface. Manages the active tab state
 * and time filter selection, passing appropriate data to child components.
 *
 * Features:
 * - Tab navigation between different leaderboard categories (overall, challenges, quizzes)
 * - Time-based filtering (weekly, monthly, all-time)
 * - Responsive layout with max width constraint
 */
const LeaderboardPage = () => {
  // State for tracking active tab selection (overall, challenges, or quizzes)
  const [activeTab, setActiveTab] = useState('overall');
  
  // State for tracking selected time period filter
  const [timeFilter, setTimeFilter] = useState('weekly');

  return (
    // Main container with responsive padding and maximum width
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header section with title and description */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Leaderboard</h1>
        <p className="text-gray-600">
          Track your progress and compete with other learners
        </p>
      </div>

      {/* Navigation controls container */}
      <div className="flex justify-between items-center mb-6">
        {/* Tab navigation for switching between leaderboard categories */}
        <LeaderboardTabs activeTab={activeTab} onTabChange={setActiveTab} />
        {/* Time period filter selection */}
        <TimeFilter activeFilter={timeFilter} onFilterChange={setTimeFilter} />
      </div>

      {/* Leaderboard data table */}
      <LeaderboardTable 
        entries={mockLeaderboardData[activeTab as keyof typeof mockLeaderboardData]}
        type={activeTab as 'overall' | 'challenges' | 'quizzes'}
      />
    </div>
  );
};

export default LeaderboardPage;