import React, { useState } from "react"

const SampleComponent = (props) => {
    const [counter, setCounter] = useState(0)
    const { data } =  props

    function clickButton () {
        const { getData } = props
        getData(counter)
        setCounter(counter + 1)
        console.log(data)
    }

    return (
        <div>
            <h1>Hello World!</h1>
            <br></br>
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