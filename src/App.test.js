import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders shopping list with add/edit/delete', () => {
  render(<App />);

  // ADD TEST
  // get input box and button
  const inputBox = screen.getByRole('textbox');
  const inputButton = screen.getByRole('button', { name: /submit/i });

  // add in new item
  userEvent.type(inputBox, 'testing');
  userEvent.click(inputButton);

  expect(screen.getByText(/test/i)).toBeInTheDocument();

  // EDIT TEST
  // get edit button
  const editButton = screen.getByRole('button', { name: /edit bread 🥖/i });

  // click on edit button
  userEvent.click(editButton);

  // get the input and save button
  const editInput = screen.getByRole('textbox', { name: /edit bread 🥖/i });
  const saveButton = screen.getByRole('button', { name: /save bread 🥖/i });

  // user event to edit
  userEvent.type(editInput, '{selectall}{del}LETS GET THIS BREAD 🥖');
  userEvent.click(saveButton);
});
