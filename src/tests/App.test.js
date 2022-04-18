import { screen } from '@testing-library/react';
import renderPath from './utils/renderPath';

test('renders learn react link', () => {
  renderPath('/')
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
