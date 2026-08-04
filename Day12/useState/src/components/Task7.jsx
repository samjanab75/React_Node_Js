import {useState} from "react";


function Task7(){

const [students,setStudents]=useState(
[
{id:1,name:"Sudhan"},
{id:2,name:"Rahul"}
]
);


const updateName=()=>{

setStudents(
students.map(student=>

student.id===1
?
{...student,name:"Karthik"}
:
student

)

)

}


return(
<div>

<h2>Task 7</h2>


{
students.map(s=>
<p key={s.id}>
{s.id} {s.name}
</p>
)
}


<button onClick={updateName}>
Update Name
</button>


</div>
)

}

export default Task7;