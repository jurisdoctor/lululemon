import { cleanup, render, screen } from '@testing-library/react';

import Button from '../../components/Button/Button';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

test('should render fetch button', () => {
  render(<Button />);

  const buttonElement = screen.getByTestId('fetch-button');

  expect(buttonElement).toBeInTheDocument();
});
