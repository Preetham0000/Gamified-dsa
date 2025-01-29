import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

/**
 * Props interface for the QuizTimer component
 * 
 * @property {number} duration - Total time allowed in seconds
 * @property {function} onTimeUp - Callback function to execute when timer reaches zero
 */
interface QuizTimerProps {
  duration: number; // in seconds
  onTimeUp: () => void;
}

/**
 * QuizTimer Component
 * 
 * A countdown timer component for quizzes that displays remaining time in MM:SS format.
 * Triggers a callback when time runs out.
 *
 * @component
 * @example
 * ```tsx
 * <QuizTimer
 *   duration={300} // 5 minutes
 *   onTimeUp={() => handleTimeUp()}
 * />
 * ```
 */
const QuizTimer: React.FC<QuizTimerProps> = ({ duration, onTimeUp }) => {
  // State to track remaining time in seconds
  const [timeLeft, setTimeLeft] = useState(duration);

  // Timer effect using setInterval
  useEffect(() => {
    // Check if timer has reached zero
    if (timeLeft === 0) {
      onTimeUp();
      return;
    }

    // Set up interval to decrement timer every second
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    // Cleanup interval on component unmount or when timeLeft changes
    return () => clearInterval(timer);
  }, [timeLeft, onTimeUp]);

  // Convert seconds to minutes and seconds for display
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    // Timer display with clock icon
    <div className="flex items-center gap-2 text-gray-600">
      <Clock className="w-5 h-5" />
      {/* Display time in MM:SS format with leading zeros */}
      <span className="font-mono">
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </span>
    </div>
  );
};

export default QuizTimer;