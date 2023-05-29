import React, { useState } from 'react'

const Sample = (props) => {
    const [counter, setCounter] = useState(0)
    const [data, setData] = useState([])

    const get_sample = (req) => {
        return new Promise((resolve, reject) => {
            resolve({
                "body":[
                    {
                        "TID": req.counter * 7 + 1,
                        "TName": "我不會飛",
                        "TDes": "abcd"
                    },
                    {
                        "TID": req.counter * 7 + 2,
                        "TName": "abcd",
                        "TDes": "abcd"
                    },
                    {
                        "TID": req.counter * 7 + 3,
                        "TName": "A1",
                        "TDes": "B1"
                    },
                    {
                        "TID": req.counter * 7 + 4,
                        "TName": "A2",
                        "TDes": "B2"
                    },
                    {
                        "TID": req.counter * 7 + 6,
                        "TName": "A3",
                        "TDes": "B3"
                    },
                    {
                        "TID": req.counter * 7 + 7,
                        "TName": "A4",
                        "TDes": "B4"
                    }
                ]
            })
        })
    }

    const clickButton = () => {
        get_sample({counter})
        .then(res => {
            setData(res.body)
        })
        setCounter(counter + 1)
    }

    return(
        <div>
            <h1> This is a sample to use redux-saga in react </h1>
            <br></br>
            <div>Click { counter } times</div>
            <br></br>
            <button onClick={ () => clickButton() }>click me to call data</button>
            {
                data.length > 0 ?
                <div>
                  <table>
                    <tbody>
                        {
                            data.map((item, idx) => {
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
    )
}

export default Sample