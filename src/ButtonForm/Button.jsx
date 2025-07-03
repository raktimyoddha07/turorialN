import { useState } from "react";
export default function Button() {
  
  // const Clicker = () => {
  //   console.log("ouch dont click me");
  //   console.log(a)
  // }

  const [count,setCount] = useState(0);
  const Adding = () => {
    setCount(count+1);
  }
  return (
    <>
      <p>{count}</p>
      <button onClick={Adding}>add</button>

    </>
    
  )
}