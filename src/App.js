import "./index.css";
import Employee from "./components/Employee";
import { useState } from 'react';

function App() {
  const [role, setRole] = useState('Developer');
  const showEmployees = true;

  return (
    <div className="App bg-red-300">
      {showEmployees ? (
        <>
          <input type="text" onChange={(e) => {
            setRole(e.target.value);
          }}></input>
          <Employee name="Matt" role={role} />
          <Employee name="Jayde" />
          <Employee name="Snickers" />
        </>
      ) : (
        <p>You cannot see the employees!</p>
      )}
    </div>
  );
}

export default App;
