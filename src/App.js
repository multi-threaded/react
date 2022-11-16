import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [role, setRole] = useState("Developer");
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Simon",
      role: "Developer",
      img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "Bob",
      role: "Intern",
      img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      name: "Alex",
      role: "Student",
      img: "https://images.pexels.com/photos/769733/pexels-photo-769733.jpeg?cs=srgb&dl=pexels-jeffrey-reed-769733.jpg&fm=jpg&_gl=1*141vx7u*_ga*NDg1MzUyNDg1LjE2Njg2MDY0NzM.*_ga_8JE65Q40S6*MTY2ODYwNjQ3My4xLjEuMTY2ODYwNzAwNS4wLjAuMA..",
    },
    {
      id: 4,
      name: "Allison",
      role: "Developer",
      img: "https://images.pexels.com/photos/1310485/pexels-photo-1310485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 5,
      name: "John",
      role: "Student",
      img: "https://images.pexels.com/photos/5325105/pexels-photo-5325105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 6,
      name: "Sarah",
      role: "Intern",
      img: "https://images.pexels.com/photos/4003769/pexels-photo-4003769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ]);

  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if (id == employee.id) {
        return { ...employee, name: newName, role: newRole };
      }
      return employee;
    });
    setEmployees(updatedEmployees);
  }

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
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  updateEmployee={updateEmployee}
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
