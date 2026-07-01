import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the brand hero heading', () => {
  render(<App />);
  const heading = screen.getByText(/shanmukh food & beverage/i);
  expect(heading).toBeInTheDocument();
});
