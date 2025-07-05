import React, { useState } from 'react'
import '../App.css'

export default function Texting() {

  const [text, setText] = useState("");
  const [para, setPara]= useState("")
  const deleting = () => {
    setText("");
  }
  const textchange = (e) => {
    setPara(e.target.value)
  }
  const addbutton = () => {
    setText(para);
    setPara("");
  }
  const editting = () => {
    setPara(text)
    setText("")
  }
  return (
    <div>
      <p>type here</p>
      <input type="text" value={para} onChange={textchange}/>
      <button onClick={addbutton}>add</button>
      <ol>
        <li>
          <div className="card">
            <p>{text}</p>
            <button onClick={deleting}>Delete</button>
            <button onClick={editting}>edit</button>
          </div>
        </li>
      </ol>
      
    </div>
  )
}
