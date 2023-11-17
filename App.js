
import React, { useState } from 'react';
import employeesData from './employeeData';
import EmployeeList from './EmployeeList';
import Filter from './Filter';
import TableData from './Tabledata';
import './App.css'


const App = () => {
  const [filter, setFilter] = useState('');

  const departments = [...new Set(employeesData.map((employee) => employee.department))];

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredEmployees = filter
    ? employeesData.filter((employee) => employee.department === filter)
    : employeesData;

  return (
    <div className='table'>
      <div>
      <h1>Employees</h1>
      
      <Filter departments={departments} handleFilterChange={handleFilterChange} />
      <h2>Employee List</h2>
      <table border={1} width="30%" cellPadding={10}>
        
      <EmployeeList employees={filteredEmployees} />
     </table>
     </div>
     <div><TableData/></div>
     
    </div>
  );
};

export default App;
