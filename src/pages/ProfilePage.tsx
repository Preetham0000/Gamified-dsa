import React from 'react';
// Importing necessary hooks from react-redux to interact with the store
import { useSelector, useDispatch } from 'react-redux';
// Importing Navigate for conditional redirection if user is not authenticated
import { Navigate } from 'react-router-dom';
// Importing RootState to access the store state structure
import type { RootState } from '../store';
// Importing logout action from the userSlice to dispatch logout
import { logout } from '../store/slices/userSlice';
// Importing components for profile page sections
import ProfileHeader from '../components/profile/ProfileHeader';
import ProgressStats from '../components/profile/ProgressStats';
import RecentActivity from '../components/profile/RecentActivity';

const ProfilePage = () => {
  const dispatch = useDispatch();
  // Getting currentUser and isAuthenticated from the Redux store state
  const { currentUser, isAuthenticated } = useSelector((state: RootState) => state.user);

  // If the user is not authenticated or there is no currentUser, redirect to login page
  if (!isAuthenticated || !currentUser) {
    return <Navigate to="/login" />;
  }

  // Handle the logout action by dispatching the logout function from userSlice
  const handleLogout = () => {
    dispatch(logout());
  };

  // Mock data for recent activities (for demonstration purposes)
  const recentActivities = [
    {
      id: '1',
      type: 'challenge' as 'challenge', // Type of activity
      title: 'Reverse a String using Stack', // Activity title
      timestamp: '2 hours ago', // When the activity was completed
      result: 'Completed', // Result of the activity
      score: 50, // Score obtained (if applicable)
    },
    {
      id: '2',
      type: 'quiz' as 'quiz',
      title: 'Array Operations Quiz',
      timestamp: '1 day ago',
      score: 80, // Quiz score
    },
    {
      id: '3',
      type: 'module' as 'module',
      title: 'Stack Data Structure',
      timestamp: '2 days ago',
      result: 'In Progress', // Current status of the module
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Rendering ProfileHeader with currentUser data */}
      <ProfileHeader user={currentUser} />
      
      {/* Rendering ProgressStats component with mock progress data */}
      <ProgressStats
        completedModules={2} // Number of modules completed
        totalModules={5} // Total modules available
        completedChallenges={3} // Number of challenges completed
        solvedQuizzes={2} // Number of quizzes solved
      />
      
      {/* Rendering RecentActivity component with mock activity data */}
      <RecentActivity activities={recentActivities} />

      {/* Button for logging out */}
      <button
        onClick={handleLogout} // Triggering the handleLogout function on click
        className="mt-6 px-4 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700"
      >
        Sign Out
      </button>
    </div>
  );
};

export default ProfilePage;
