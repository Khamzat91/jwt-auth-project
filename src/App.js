import React from "react";
import './index.scss';

function App() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

const handleChangeEmail = (e) =>{
  setEmail(e.target.value)
}

const handleChangePassword = (e) =>{
  setPassword(e.target.value)
}
  const handleSubmit = (e) => {
     e.preventDefault()
     if(email && password){
      console.log(email, password);
      setEmail('')
      setPassword('')
     }else{
      if(!email){
        alert("неправильно ввели Email")
      }else{
        alert("неправильный Пороль")
      }
     }

  }
  return (
    <div className="app">
    <form onSubmit={handleSubmit}>
      <label>
        <input onChange={handleChangeEmail} value={email} name="email" type="text" placeholder="email"/>
      </label>
      <label>
        <input onChange={handleChangePassword} value={password} name="password" type="text" placeholder="пороль"/>
      </label>
      <button type="submit" onClick={handleSubmit}>Отправить</button>
    </form>
    </div>
  );
}

export default App;
