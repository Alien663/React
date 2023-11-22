import { useDispatch, useSelector } from "react-redux"
import { SampleThunk, increment } from '../Store/Sample'
import React, { useEffect, useState } from "react"
import MyIcon from "../Component/MyIcon"
import Spinner from 'react-bootstrap/Spinner';
import MyStepper from "../Component/MyStepper";

const LoadingData = () => {
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  )
}

const SamplePage = () => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.Sample.data);
  const Counts = useSelector((state) => state.Sample.Counts)

  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(false)
  }, [data])

  function clickButton() {
    setLoading(true)
    dispatch(SampleThunk({ page: Counts }))
    dispatch(increment(Counts + 1))
  }

  return (
    <div>
      <h1>Hello World!</h1>
      <MyIcon iconName="App" />
      <br />
      <div>Click {Counts} times</div>
      <button onClick={() => clickButton()}>Sample Button</button>
      <div>
        {
          isLoading ? <LoadingData></LoadingData> :
            <div>
              {
                data.length === 0 ? <div>no data yet</div> : <table>
                  <thead>
                    <tr>
                      <td>TID</td>
                      <td>TName</td>
                      <td>TDes</td>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map(item => (
                      <tr key={item["TID"]}>
                        <td>{item["TID"]}</td>
                        <td>{item["TName"]}</td>
                        <td>{item["TDes"]}</td>
                      </tr>
                    ))
                    }
                  </tbody>
                </table>
              }
            </div>
        }
      </div>

      <div style={{
        border: "solid",
        borderColor: "blue",
      }}>
        <h2>This is stepper area</h2>
        <MyStepper data={["item 1", "item 2", "item 3", "item 4"]} step={1}></MyStepper>
      </div>
    </div>
  )
}

export default SamplePage