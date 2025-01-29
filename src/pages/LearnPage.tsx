import React from 'react';
// Importing the ModuleList component that displays a list of learning modules
import ModuleList from '../components/learning/ModuleList';
// Importing BookOpen icon from lucide-react to visually represent the learning theme
import { BookOpen } from 'lucide-react';

const LearnPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Main Content Area */}
      <div className="text-center mb-12">
        {/* Icon Section */}
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-indigo-100 rounded-full">
            {/* BookOpen Icon to represent the learning theme */}
            <BookOpen className="w-8 h-8 text-indigo-600" />
          </div>
        </div>

        {/* Page Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Learning Modules
        </h1>

        {/* Description of the page */}
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Choose a module to start learning. Each module contains interactive lessons,
          visualizations, and practice exercises.
        </p>
      </div>

      {/* ModuleList component renders the list of available learning modules */}
      <ModuleList />
    </div>
  );
};

export default LearnPage;
