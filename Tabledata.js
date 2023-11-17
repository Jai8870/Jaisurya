import React, { useState } from 'react'; 
import StudentForm from './StudentForm'; 
import jsonData from './data.json'; 

function TableData() { 
const [studentData, setStudentData] = useState(jsonData); 

const tableRows = studentData.map((info) => { 
	return ( 

	<tr> 
		<td>{info.id}</td> 
		<td>{info.name}</td> 
		<td>{info.department}</td> 
	</tr> 
	); 
}); 

const addRows = (data) => { 
	const totalStudents = studentData.length; 
	data.id = totalStudents + 1; 
	const updatedStudentData = [...studentData]; 
	updatedStudentData.push(data); 
	setStudentData(updatedStudentData); 
}; 

return ( 
	<div> 
        <StudentForm func={addRows} />
	<table border={1} width="30%" cellPadding={10}>
		<thead> 
		<tr> 
			<th>Sr.NO</th> 
			<th>Name</th> 
			<th>Department</th> 
		</tr> 
		</thead> 
		<tbody>{tableRows}</tbody> 
	</table> 
	 
	</div> 
); 
} 

export default TableData;
