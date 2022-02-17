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
  userEvent.type(inputBox, 'test');
  userEvent.click(inputButton);

  expect(screen.getByText(/test/i)).toBeInTheDocument();

  // EDIT TEST
  // get edit button
  const editButton = screen.getByLabelText('Edit test');

  // click on edit button
  userEvent.click(editButton);

  // get the input and save button
  const editInput = screen.getByRole('textbox', { name: /edit test/i });
  const saveButton = screen.getByRole('button', { name: /save test/i });

  // user event to edit
  userEvent.type(editInput, '{selectall}{del}plswork');
  userEvent.click(saveButton);

  screen.getByText('plswork');

  expect(screen.queryByText('test')).not.toBeInTheDocument();

  // DELETE TEST
  // get delete button
  const deleteButton = screen.getByLabelText('Delete plswork');

  // user click delete button
  userEvent.click(deleteButton);

  expect(screen.queryByText('plswork')).not.toBeInTheDocument();
});
