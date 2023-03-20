import logo from './logo.svg';
import './App.css';
import { account } from './api';



function App() {



  const loginUser = async (e) => {
    e.preventDefault()
    try {

     await account.create(
        'unique()',
        'me@example.com',
        'password',
        'Jane Doe'
      ).then(response => {
        console.log(response);
      }, error => {
        console.log(error);
      });

    } catch (error) {
        console.log(error);
    }
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={loginUser}></button>
      </header>
    </div>
  );
}

export default App;
