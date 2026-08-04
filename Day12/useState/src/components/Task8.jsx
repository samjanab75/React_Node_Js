import {useState} from "react";


function Task8(){

const [courses,setCourses]=useState(
[
{id:1,course:"React"},
{id:2,course:"Node"}
]
);


const changeCourse=()=>{

setCourses(
courses.map(c=>
c.id===1
?
{...c,course:"MERN"}
:
c
)
)

}


return(
<div>

<h2>Task 8</h2>


{
courses.map(c=>
<p key={c.id}>
{c.course}
</p>
)
}


<button onClick={changeCourse}>
Change React
</button>


</div>
)

}

export default Task8;