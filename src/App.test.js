import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders shopping list with add/edit/delete', () => {
  render(<App />);

  // get input box and button
  const inputBox = screen.getByRole('textbox');
  const inputButton = screen.getByRole('button', { name: /submit/i });

  // add in new item
  userEvent.type(inputBox, 'testing');
  userEvent.click(inputButton);

  expect(screen.getByText(/test/i)).toBeInTheDocument();
});
