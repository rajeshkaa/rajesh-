import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const sampleTest = screen.getByTestId('c4');
  expect(sampleTest).toBeInTheDocument();
  
});
test('renders learn react link', () => {
  render(<App />);
  const sampleTest = screen.getByTestId('c5');
  expect(sampleTest).toContainHTML('<input placeholder="enter here" type="search" />')
  
  
});

