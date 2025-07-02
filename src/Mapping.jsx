function Mapping() {
  const list = ["banana", "apple", "grape", "mango"]; 
  const object = {
    name:"karan",
    gender:"male",
    underage: true,
  } 
  const listObject = [{
      name:"karan",
      gender:"male",
      underage: true,
  },
    {
      name:"hian",
      gender:"female",
      underage: false,
    },
    {
      name:"Lilan",
      gender:"male",
      underage: false,
    },
    {
      name:"fakir",
      gender:"male",
      underage: true,
    }]
  return (
    <>
      {/* <h1>{list[2]}</h1>
      <ol>
        {list.map((i,index) => (<li key={index}>{i}</li>))}
      </ol>
      <br /><br />
      <h1>{object.name}</h1> */}
      {/* <ol>  
        {object.map((j) => (<li>{ j}</li> ))}
      </ol> */}
      <ol><h1>underage</h1>
        {listObject.map((o) =>o.underage ? ( <li>Name : {o.name} <br /> Gender : {o.gender}</li> ) : null)   }
      </ol>
      <ol><h1>Overage</h1>
        {listObject.map((o) =>!o.underage ? ( <li>Name : {o.name} <br /> Gender : {o.gender}</li> ) : null)   }
      </ol>

      {/* <h1>{listObject[1].name}</h1> */}

    </>
  )
}

export default Mapping