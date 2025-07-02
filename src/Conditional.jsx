function Conditional({hiornot}) {
  const a = hiornot
  return (
    <div>
      {a ? <h1>hi how are you</h1> : <h1>No greeting</h1> }
    </div>
    
  )
}
export default Conditional

// function Conditional() {
//   const a = "hi"
//   if (a === "hi") {
//     return (
//       <h1>hi how are you</h1>
//     )
//   }
//     return (
//       <div>
//         <h1>No greeting</h1>
//       </div>
//     )
  
// }
// export default Conditional