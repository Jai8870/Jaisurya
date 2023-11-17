
import React from 'react';
import './EmployeeList.css';

const EmployeeList = ({ employees }) => {
  return (
    <div>
    
    <div className="employee-list">
      <thead>
        <tr>
          <th>EMP.Name</th>
          <th>EMP.Department</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr className="employee-item" key={employee.id}>
            <td>{employee.name}</td> <td>{employee.department}</td> 
          </tr>
      
        ))}
     </tbody>
    </div>
    </div>
  );
};

export default EmployeeList;
