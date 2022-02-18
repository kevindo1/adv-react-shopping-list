import './App.css';
import Home from './views/Home';
import ListProvider from './context/Context';

function App() {
  return (
    <ListProvider>
      <div className="App">
        <Home />
      </div>
    </ListProvider>
  );
}

export default App;
