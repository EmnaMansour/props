
import './App.css';
import img from './img.png';
import Profil from './profile/profile';
import { Test } from "./Test";

function App() {
  const handleName =(username) =>{
    alert (username);
  }
  const fullName='Emna';
  const bio='bio';
  const profession='dev web';
  return (
    <div className="App">
<Profil fullName={fullName} bio={bio} profession={profession} handleName={handleName}>
    <Test />
    <img src={img}/>
  </Profil>
    </div>
  );
}

export default App;
