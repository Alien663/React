import React, { useState } from 'react'
import RecComp from '../Component/RecComp'

const Test = (props) => {
  const data = [
    {ID: 1, PID: 0, Label: "root", Layer: 0,},
    {ID: 2, PID: 1, Label: "node 1", Layer: 1,},
    {ID: 3, PID: 1, Label: "node 2", Layer: 1,},
    {ID: 4, PID: 1, Label: "node 3", Layer: 1,},
    {ID: 5, PID: 3, Label: "node 2-1", Layer: 2,},
    {ID: 6, PID: 3, Label: "node 2-2", Layer: 2,},
  ]

  return (
    <div>Hello World
      <RecComp data={data} Layer={0} PID={0}></RecComp>
    </div>
  )
}
export default Test