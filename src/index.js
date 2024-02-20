// Import necessary modules
import React from 'react';
import ReactDOM from 'react-dom';

// Import CSS file for styling
import './index.css';

// Import the root component of the application
import App from './App';

// Import function for measuring web vitals
import reportWebVitals from './reportWebVitals';

// Create a React root and render the application
// The React.StrictMode component helps identify potential issues in the application
// It activates additional checks and warnings for features such as legacy string ref
// This is useful for identifying and fixing unsafe lifecycle methods and side effects
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, you can use reportWebVitals
// Pass a function to log results (for example: reportWebVitals(console.log))
// Or send data to an analytics endpoint
// Learn more about measuring web vitals: https://bit.ly/CRA-vitals
reportWebVitals();
