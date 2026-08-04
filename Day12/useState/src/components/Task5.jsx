import {useState} from "react";


function Task5(){

const [fruits,setFruits]=useState(
["Apple","Orange"]
);


const addFruit=()=>{

setFruits([
 ...fruits,
 "Mango"
])

}


return(
<div>

<h2>Task 5</h2>


{
fruits.map((f,i)=>
<p key={i}>{f}</p>
)
}


<button onClick={addFruit}>
Add Mango
</button>


</div>
)

}

export default Task5;