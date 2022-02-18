# Alchemy React Base Template

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Use this template for all your "from scratch" deliverables. To start, simply run

- `npm install`
- `npm start`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### Home View

- const [items, dispatch] = useReducer(shoppingReducer, initialState)
- reducer with switch cases including "add", "edit", "delete"
- dispatch({
  type: 'add',
  id: items.length + 1,
  text,
  })

#### Add Component

- Input Box
- Add item button

#### Shopping List

- List that has map of items including their name, edit, and delete

#### Context

- Add the reducer and switch cases into the context folder
- Return the provider
- Wrap app in the provider
