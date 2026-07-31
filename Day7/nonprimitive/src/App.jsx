//  import React from 'react'
 
//  export const App = () => {
//   const arr = [1,2,3,4,5,6,7,7]
//    return (
//      <>
   
//      <h1>{arr}</h1>
//      <div> 
//       <ol>
//         {arr.map((e,i)=>(<li key={i+1}>{e} </li> ))  }
//       </ol>
//       <p>
//         {arr.filter ((e)=>e%2!=0)}</p>
//      </div>
      
//        </>
//    )
//  }
//  export default App

//object rendering methods


// import React from 'react'

// export const App = () => {
// const obj = { Name:"React" ,subject:"Node", Skill:{main: "html"} }
 
// const arr=[]
// const datas=[...arr,obj]
// console.log(datas);

//  return (

//     <>
//     <h2>{obj.Name}</h2>
//     <h2>{obj.subject}</h2>
//     <h2>{obj.Skill.main}</h2>

//     </>
   
//   )
// }
// export default App

//array of object rendering

// import React from 'react'

// export const App = () => {
//   const data =[
//     {Name:"React",Subject:"Html"}
//     {Name:"Node",Subject:"c++"}
//     {Name:"css", subject:"tailwind css"}
//   ]
//   return (
//      <>
//      <h2>{data.map ((e,i)=)}</h2>
//      </>
//   )
  
// }
// export default App  



import Task1 from "./assets/components/Task1";
import Task2 from "./assets/components/Task2";
import Task3 from "./assets/components/Task3";
import Task4 from "./assets/components/Task4";
import Task5 from "./assets/components/Task5";
import Task6 from "./assets/components/Task6";
import Task7 from "./assets/components/Task7";
import Task8 from "./assets/components/Task8";
import Task9 from "./assets/components/Task9";
import Task10 from "./assets/components/Task10";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-100 p-10">
      <h1 className="text-5xl font-bold text-center text-blue-700 mb-10">
        React Rendering Methods Assignment
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        <Task1 />
        <Task2 />
        <Task3 />
        <Task4 />
        <Task5 />
        <Task6 />
        <Task7 />
        <Task8 />
        <Task9 />
        <Task10 />

      </div>
    </div>
  );
};

export default App;