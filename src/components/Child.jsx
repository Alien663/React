import React from 'react'
const ChildComponent = (props) => {
    const { counter, clickbutton } = props
    return(
        <div>
            <button onClick={clickbutton}>click me</button>
            <p>child's counter:{counter}</p>
        </div>
    )
}
export default ChildComponent