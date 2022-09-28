import React from "react";
import './index.scss';

function App() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onSubmit = (e) => {
if()
  }
  return (
    <div className="app">
    <form onSubmit={onSubmit}>
      <label>
        <input value={email} name="email" type="text"/>
      </label>
      <label>
        <input value={password} name="password" type="text"/>
      </label>
      <button onClick={onSubmit}>Отправить</button>
    </form>
    </div>
  );
}

export default App;
