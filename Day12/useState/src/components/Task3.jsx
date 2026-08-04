import {useState} from "react";

function Task3(){

const [names,setNames]=useState(
 ["Vijay","Ajith","Suriya"]
);


const changeName=()=>{

 setNames(
  names.map((name)=>
    name==="Ajith" ? "SK" : name
  )
 )

}


return(
<div>

<h2>Task 3</h2>

{
names.map((n,index)=>
<p key={index}>{n}</p>
)
}


<button onClick={changeName}>
Change Ajith
</button>


</div>
)

}

export default Task3;