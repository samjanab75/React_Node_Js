import {useState} from "react";

function Task4(){

const [numbers,setNumbers]=useState(
[10,20,30,40]
);


const changeNumber=()=>{

setNumbers(
numbers.map(num=>
num===30 ? 100 : num
)
)

}


return(
<div>

<h2>Task 4</h2>

{
numbers.map((n,i)=>
<p key={i}>{n}</p>
)
}


<button onClick={changeNumber}>
Change 30
</button>


</div>
)

}

export default Task4;