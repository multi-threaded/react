import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [role, setRole] = useState("Developer");
  const [employees, setEmployees] = useState(
    [
      {
        name: "Simon",
        role: "Developer",
        img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        name: "Bob",
        role: "Intern",
        img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        name: "Alex",
        role: "Student",
        img: "https://images.pexels.com/photos/769733/pexels-photo-769733.jpeg?cs=srgb&dl=pexels-jeffrey-reed-769733.jpg&fm=jpg&_gl=1*141vx7u*_ga*NDg1MzUyNDg1LjE2Njg2MDY0NzM.*_ga_8JE65Q40S6*MTY2ODYwNjQ3My4xLjEuMTY2ODYwNzAwNS4wLjAuMA.."
      },
      {
        name: "Allison",
        role: "Developer",
        img: "https://images.pexels.com/photos/1310485/pexels-photo-1310485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        name: "John",
        role: "Student",
        img: "https://images.pexels.com/photos/5325105/pexels-photo-5325105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        name: "Sarah",
        role: "Intern",
        img: "https://images.pexels.com/photos/4003769/pexels-photo-4003769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
    ]
  );
  const showEmployees = true;

  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              setRole(e.target.value);
            }}
          ></input>
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              return (
                <Employee
                  key={uuidv4()}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                />
              );
            })}
          </div>
        </>
      ) : (
        <p>You cannot see the employees!</p>
      )}
    </div>
  );
}

export default App;
