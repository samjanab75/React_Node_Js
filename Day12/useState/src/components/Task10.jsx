import {useState} from "react";


function Task10(){

const [students,setStudents]=useState(
[
{id:1,name:"Sudhan"},
{id:2,name:"Rahul"},
{id:3,name:"Karthik"}
]
);


const deleteStudent=()=>{

setStudents(
students.filter(
student=>student.name!=="Rahul"
)
)

}


return(
<div>

<h2>Task 10</h2>


{
students.map(s=>
<p key={s.id}>
{s.name}
</p>
)
}


<button onClick={deleteStudent}>
Delete Rahul
</button>


</div>
)

}

export default Task10;