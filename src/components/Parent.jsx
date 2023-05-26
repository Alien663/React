import React, {useState} from 'react'
import ChildComponent from './Child'
const ParentComponent = () => {
    const [counter, setCounter] = useState(0)
    const handle_button = () => {
        setCounter(counter + 1)
    }
    return(
        <div>
            <ChildComponent counter={counter} clickbutton={handle_button}></ChildComponent>
            <div>this is parent's counter : {counter}</div>
        </div>
    )
}
export default ParentComponent