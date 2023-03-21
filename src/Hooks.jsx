// import React, { useEffect, useState } from 'react'

// const Hooks = () => {
//     const [count, setcount] = useState(0)
//     const [name, setname]= useState("mandar")
//     // useEffect(() => {
          
//     //     console.log("this is effct" + count);

//     // },[])
//     // useEffect(() => {
          
//     //     console.log("this is effct" + count);

//     // },[count])
//     useEffect(() => {
          
//         console.log("this is effct" + count);

//     },[count,name])
//     return (

//         <center>
//           <div>{count}</div>
//           <div>{name}</div>
//           <button onClick={()=>setcount(count+1)} >update</button>
//           <button onClick={()=>setname("Rohit")} >update</button>
//         </center>
//     )
// }

// export default Hooks