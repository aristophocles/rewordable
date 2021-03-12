import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const emptyField = screen.getByText('You have no cards');
  expect(emptyField).toBeInTheDocument();
});
