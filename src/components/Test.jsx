import React, { useState } from 'react'

const MyTestComp = (props) => {
    const [condition, setCondition] = useState()

    const handle_condition = () => {
        setCondition(["1","2", "3"])
    }

    return(
        <div>Hello World QUANTA
            <button onClick={handle_condition}>click me</button>
            {condition.length === 0? 
            <div>no data</div>:
            <div>{
                condition.map(item => {
                    return <div>{item}</div>
                })
            }</div>
            
            }
        </div>
    )
}
export default MyTestComp