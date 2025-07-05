import React from 'react'
import { useState } from 'react'

export default function ListEdit() {
  const [list, setList] = useState(["Orange", "Apple", "Mango", "grape", "Watermelon"]);
  const [fruit, setFruit] = useState("");
  const [index, setIndex] = useState(0);
  const changeindex = (e) => {
    setIndex(e.target.value)
  }
  const changefruit = (e) => {
    setFruit(e.target.value)
  }

  const changing = () => {
    const updatedList = [...list];
    if (index >= 1 && index <= updatedList.length && fruit.trim() !== "") {
      updatedList[index-1] = fruit;
      setList(updatedList);
      setFruit("");
      setIndex("");
    }
    else {
      alert("Please enter a valid index and a new fruit.");
    }
  }
  
  return (
    <div>
      <ol>
        {list.map((i) => (<li>{i}</li> ))}
      </ol>
      <input type="number" value={index} placeholder='select index to change' onChange={changeindex}/>
      <input type="text" value={fruit} placeholder='type the new fruit' onChange={changefruit}/>
      <button onClick={changing}>change</button>
    </div>
  )
}
