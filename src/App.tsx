import tanstackLogo from './assets/tanstack-logo.png';
import './App.css';
import List from './components/List';

function App() {
  return (
    <>
      <div>
        <img src={tanstackLogo} className="logo" alt="Tanstack logo" />
      </div>
      <h1>Virtualised List</h1>
      <p>
        This is a virtualised list that uses the react-window library to render
        a list of items.
      </p>
      <div className="card">
        <List />
      </div>
    </>
  );
}

export default App;
