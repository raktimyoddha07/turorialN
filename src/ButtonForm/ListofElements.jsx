import React, { useState } from 'react'

export default function ListofElements() {
  const [list, setList] = useState(["orange", "apple", "grape", "melon"]);
  const changegrape = () => {
    setList((prevList) => [
      "orange",           // new value at index 0
      ...prevList.slice(1) // keep the rest of the list unchanged
    ])
  }
  return (
    <div>
      <h1>{list[2]}</h1>
    </div>
  )
}
