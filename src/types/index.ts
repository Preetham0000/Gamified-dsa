// Defines the structure of a User object
export interface User {
  id: string; // Unique identifier for the user
  username: string; // User's display name
  email: string; // User's email address
  points: number; // Total points earned by the user
  badges: Badge[]; // List of badges earned by the user
  progress: ModuleProgress[]; // Progress tracking for learning modules
}

// Defines a Badge object representing achievements
export interface Badge {
  id: string; // Unique identifier for the badge
  name: string; // Name of the badge
  description: string; // Description of what the badge represents
  imageUrl: string; // URL for the badge image
}

// Defines progress tracking for a learning module
export interface ModuleProgress {
  moduleId: string; // Unique identifier for the learning module
  completed: boolean; // Whether the module is completed
  score: number; // User's score in the module
  lastAttempt: Date; // Timestamp of the last attempt
}

// Defines the structure of a stack operation
export interface StackOperation {
  type: 'push' | 'pop' | 'peek'; // Type of stack operation
  value?: number; // Value being pushed (optional for pop/peek)
  timestamp: Date; // Timestamp of when the operation occurred
}
