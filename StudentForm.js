import React, { useState } from 'react'; 

function StudentForm(props) { 
const [name, setName] = useState(''); 
const [department, setDepartment] = useState(''); 

const changeName = (event) => { 
	setName(event.target.value); 
}; 

const changeDepartment = (event) => { 
	setDepartment(event.target.value); 
}; 

const transferValue = (event) => { 
	event.preventDefault(); 
	const val = { 
	name, 
	department, 
	}; 
	props.func(val); 
	clearState(); 
}; 

const clearState = () => { 
	setName(''); 
	setDepartment(''); 
}; 

return ( 
	<div> 
	<label>Name</label> <br></br>
	<input type="text" value={name} onChange={changeName} /> <br></br>
	<label>Department</label> <br></br>
	<input type="text" value={department} onChange={changeDepartment} />  <br></br>
	<button onClick={transferValue}> Click Me</button> <br></br>
	</div> 
); 
} 

export default StudentForm;
