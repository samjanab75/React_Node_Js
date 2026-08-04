import {useState} from "react";


function Task9(){

const [products,setProducts]=useState(
[
{id:1,name:"Laptop"}
]
);


const addProduct=()=>{

setProducts([
...products,
{
id:2,
name:"Mobile"
}
])

}


return(
<div>

<h2>Task 9</h2>


{
products.map(p=>
<p key={p.id}>
{p.name}
</p>
)
}


<button onClick={addProduct}>
Add Product
</button>


</div>
)

}

export default Task9;