// Import necessary modules for testing
import { render, screen } from '@testing-library/react';

// Import the component to be tested
import App from './App';

// Test case: "renders learn react link"
test('renders learn react link', () => {
  // Render the App component
  render(<App />);

  // Find the element with text "learn react" (case insensitive)
  const linkElement = screen.getByText(/learn react/i);

  // Assert that the element is in the document
  expect(linkElement).toBeInTheDocument();
});
