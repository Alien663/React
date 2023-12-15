import React from 'react'

const RecComp = ({ data, Layer, PID }) => {
  return (
    <div>
      {
        data.filter(item => item.Layer === Layer && item.PID === PID)
          .map(item => (
            <div key={item.ID}>
              {item.Label}
              <RecComp
                data={data.filter(item2 => item2.Layer > item.Layer)}
                Layer={item.Layer + 1}
                PID={item.ID}
              ></RecComp>
            </div>
          ))
      }
    </div>
  )
}
export default RecComp