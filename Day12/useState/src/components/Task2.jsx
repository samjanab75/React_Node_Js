import { useState } from "react";

function Task2(){

 const [product,setProduct] = useState({
    name:"Mobile",
    price:20000
 });


 const changePrice=()=>{
    setProduct({
      ...product,
      price:25000
    })
 }


 return(
 <div>

 <h2>Task 2</h2>

 <p>{product.name}</p>
 <p>{product.price}</p>

 <button onClick={changePrice}>
 Change Price
 </button>

 </div>
 )

}

export default Task2;