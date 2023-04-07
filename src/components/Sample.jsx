import React, { useState } from "react";

const Sample = (props) => {
    const [counter, setCounter] = useState(0);
    const { data } = props
    function clickButton() {
        const { getData } = props
        getData({counter})
        setCounter(counter + 1)
        console.log(data)
    }

    return(
        <div>
            <h1> This is a sample to use redux-saga in react </h1>
            <br></br>
            <div>{ counter }</div>
            <br></br>
            <button onClick={ () => clickButton() }>click me to call data</button>
            {
                data?
                <div>
                  <table>
                    <tbody>
                    {
                        data.map(item => {
                            return(
                                <tr>
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
    )
}

export default Sample