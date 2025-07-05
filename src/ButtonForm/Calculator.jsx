import { useState } from 'react';

function Calculator() {
  const [count1, setCount1] = useState();
  const [count2, setCount2] = useState();
  const [count, setCount] = useState();
  const [sign, setSign] = useState("operator");

  const handleOnChange1 = (e) => {
    setCount1(Number(e.target.value));
  }
  
  const handleOnChange2 = (e) => {
    setCount2(Number(e.target.value));
  }

  const add = () => {
    setCount(count1 + count2);
    setSign("+");
  }

  const subtract = () => {
    setCount(count1 - count2);
    setSign("-");
  }

  const multiply = () => {
    setCount(count1 * count2);
    setSign("x");
  }

  const divide = () => {
    setCount(count1 / count2 );
    setSign("/");
  }

  return (
    <>

      <input
        type="text"
        value={count1}
        onChange={handleOnChange1}
        placeholder="Enter number"
      />

      <input
        type="text"
        value={count2}
        onChange={handleOnChange2}
        placeholder="Enter number"
      />

      <button onClick={add}>Add</button>
      <button onClick={subtract} >Subtract</button>
      <button onClick={multiply} >Multiply</button>
      <button onClick={divide} >Divide</button>
      <h2>Result : {count1} {sign} {count2} = {count}</h2>
      
    </>
  );
}

export default Calculator;