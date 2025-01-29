import { StrictMode } from 'react'; 
// Enables additional runtime checks and warnings in development mode

import { createRoot } from 'react-dom/client'; 
// Creates a root for rendering the React application in a concurrent mode

import App from './App.tsx'; 
// Imports the main App component

import './index.css'; 
// Imports global styles for the application

// Selects the root div from the HTML and renders the React application inside it
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
