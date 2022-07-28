import './App.css';
import Users from './components/Users';
import UserCreationForm from './components/UserCreationForm';
import ImplementingImmer from './components/ImplementingImmer';
import {db} from "./DbDexie/dataBase"
import DexieTable from './components/DexieTable';

db.open().catch((err)=>{
  console.log("failed to open db: " + err.stack || err)
})



function App() {

  

  return (
    <div className="App">
      <header className="App-header">
        <h1>Users creation Form</h1>
        <UserCreationForm  formColor={"#32323f"} />
        
        <h1>Users Table</h1>
        <Users/>

        <h1>Dexie Data</h1>
        <DexieTable/>
        
        <h1>Imer</h1>
        <ImplementingImmer/>
      </header>
    </div>
  );
}

export default App;
