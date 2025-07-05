import React, { useState } from 'react'

export default function ObjectEdit() {
  const [obj, setObj] = useState({
    name: "nilima",
    branch: "ECE",
    college: "MZU",
    cgpa: 6
  })
  const [namer, setNamer] = useState("");
  
  const namechange = (e) => {
    setNamer(e.target.value);
  }

  const namechangebutton = () => {
    setObj({ ...obj, name: namer })
    // setObj({ ...obj, name: namer , branch : namer})
    setNamer("")
  }




  return (
    <div>
      <p>{obj.name} <br /> {obj.branch} <br /> {obj.college} <br /> {obj.cgpa}</p>
      <input type="text" placeholder='enter name here' onChange={namechange} value={namer} />
      <button onClick={namechangebutton}>Change Name</button>
      
    </div>
  )
}
