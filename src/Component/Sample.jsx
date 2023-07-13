import { useDispatch, useSelector } from "react-redux"
import { SampleThunk } from '../Store/Sample'
import React, { useState } from "react"

const SampleComponent = () => {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.Sample.data);
    const [counter, setCounter] = useState(0)

    function clickButton (){
        dispatch(SampleThunk({page: counter}))
        setCounter(counter + 1)
    }

    return (
        <div>
            <h1>Hello World!</h1>
            <br />
            <div>Click {counter} times</div>
            <button onClick={() => clickButton()}>Sample Button</button>
            <div>
            {
                data?
                <div>
                <table>
                    <thead>
                        <tr>
                            <td>TID</td>
                            <td>TName</td>
                            <td>TDes</td>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        data.map(item => {
                            return(
                                <tr key={item["TID"]}>
                                    <td>{item["TID"]}</td>
                                    <td>{item["TName"]}</td>
                                    <td>{item["TDes"]}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
                </div> : <div>no data yet</div>
            }
            </div>
        </div>
    )
}

export default SampleComponent