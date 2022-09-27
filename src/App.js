import logo from './logo.svg';
import './App.css';

function App() {
  const email = '';
  const password = '';   
  return (
    <div className="App">
    <form>
      <label>
        <input name="email" type="text"/>
      </label>
      <label>
        <input name="password" type="text"/>
      </label>
      <button>Отправить</button>
    </form>
    </div>
  );
}

export default App;
