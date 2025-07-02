function Propcard(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.about}</p>
    </div>
  )

}

export default Propcard;

// function Propcard({ name, about }) {
//   return (
//     <div>
//       <h1>{name}</h1>
//       <p>{about}</p>
//     </div>
//   )

// }

// export default Propcard;