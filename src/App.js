import logo from './logo.svg';
import './App.css';
import Users from './components/Users';
import UserCreationForm from './components/UserCreationForm';


function App() {

  

  return (
    <div className="App">
      <header className="App-header">

        <h1>Users Form</h1>
        <UserCreationForm/>
        <h1>Users Table</h1>
        <Users/>
      </header>
    </div>
  );
}

export default App;
