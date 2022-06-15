import logo from './logo.svg';
import './App.css';
import Users from './components/Users';
import UserCreationForm from './components/UserCreationForm';
import ImplementingImmer from './components/ImplementingImmer';


function App() {

  

  return (
    <div className="App">
      <header className="App-header">

        <h1>Users creation Form</h1>
        <UserCreationForm/>
        <h1>Users Table</h1>
        <Users/>
        <h1>Imer</h1>
        <ImplementingImmer/>
      </header>
    </div>
  );
}

export default App;
