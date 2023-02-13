import { render, screen } from '@testing-library/react';
import App from './App';

it('renders NavBar', () => {
  render(<App />);
  const logoElement = screen.getByAltText(/costs/i);
  expect(logoElement).toBeInTheDocument();
});

it('renders Home application', () => {
  render(<App />);
  const welcomeElement = screen.getByText(/Welcome/i);
  expect(welcomeElement).toBeInTheDocument();
});