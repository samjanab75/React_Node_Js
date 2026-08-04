import {useState} from "react";


function Task6(){

const [fruits,setFruits]=useState(
["Apple","Orange","Mango"]
);


const removeFruit=()=>{

setFruits(
fruits.filter(
fruit=>fruit!=="Orange"
)
)

}


return(
<div>

<h2>Task 6</h2>


{
fruits.map((f,i)=>
<p key={i}>{f}</p>
)
}


<button onClick={removeFruit}>
Remove Orange
</button>


</div>
)

}

export default Task6;