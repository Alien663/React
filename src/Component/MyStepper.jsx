import React, { useState } from 'react'
import '../Style/Stepper.css'

const MyStepper = ({ data, step }) => {
  return (
    <ol class="list">
      {
        data.map((item, idx) => (
          <li className={idx===step? "active": ""}>{idx+1}</li>
        ))
      }
    </ol>
  )
}
export default MyStepper