import React, { useState } from 'react'

export default function ListObjectEditting() {
  const [lo, setLo] = useState([
    {
      name: "Nilima",
      gender: "female",
      cgpa: 4,
      passed: false
    },
    { 
      name: "lala",
      gender: "male",
      cgpa: 8,
      passed: false
    },
    {
      name: "Mukesh",
      gender: "female",
      cgpa: 9,
      passed: true
    },
    {
      name: "Rakesh",
      gender: "male",
      cgpa: 10,
      passed: true
    }
  ])
  return (
    <div>
      
    </div>
  )
}
