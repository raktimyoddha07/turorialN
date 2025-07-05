import React from 'react'
import { useState } from 'react';

export default function C2() {
  const [count1, setCount1] = useState( );
  const [count2, setCount2] = useState( );
  const [count, setCount] = useState( );
  const [sign, setSign] = useState("Operator");
  const [extra1, setExtra1] = useState( );
  const [extra2, setExtra2] = useState( );

  const handleOnChange1 = (e) => {
    setExtra1(Number(e.target.value));
  }
  
  const handleOnChange2 = (e) => {
    setExtra2(Number(e.target.value));
  }

  const add = () => {
    setCount(extra1 + extra2);
    setSign("+");
    setCount1(extra1);
    setCount2(extra2);
    setExtra1("");
    setExtra2("");
  }

  const subtract = () => {
    setCount(extra1 - extra2);
    setSign("-");
    setCount1(extra1);
    setCount2(extra2);
    setExtra1("");
    setExtra2("");
  }

  const multiply = () => {
    setCount(extra1 * extra2);
    setSign("x");
    setCount1(extra1);
    setCount2(extra2);
    setExtra1("");
    setExtra2("");
  }

  const divide = () => {
  setCount(extra1 / extra2);
    setSign("/");
    setCount1(extra1);
    setCount2(extra2);
    setExtra1("");
    setExtra1("");
  }

  const deleting = () => {
    setExtra1(" ");
    setExtra2(" ");
    setCount1(" ");
    setCount2(" ");
    setCount(" ");
    setSign("Operator");
  }

  const edit = () => {
    setExtra1(count);
    setExtra2(" ");
    setCount(" ");
    setSign("Operator");
  }

  return (
    <>

      <input
        type="text"
        value={extra1}
        onChange={handleOnChange1}
        placeholder="Enter number"
      />

      <input
        type="text"
        value={extra2}
        onChange={handleOnChange2}
        placeholder="Enter number"
      />

      <button onClick={add}>Add</button>
      <button onClick={subtract} >Subtract</button>
      <button onClick={multiply} >Multiply</button>
      <button onClick={divide} >Divide</button>
      <button onClick={deleting}>delete</button>
      <button onClick={edit}>Edit</button>

      <h2>{count}</h2>
      <h2>Result : {count1} {sign} {count2} = {count}</h2>
      
    </>
  );
}



