import { useEffect, useState, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import Table from 'react-bootstrap/Table'
import Spinner from "react-bootstrap/Spinner"
import Button from 'react-bootstrap/Button'

import { SampleThunk, increment } from '../../Store/Sample'
import MyIcon from '../../Component/MyIcon'
import Paging from '../../Component/Paging'

const ShowTable = () => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.Sample.data);
  const Counts = useSelector((state) => state.Sample.Counts)

  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(false)
  }, [data])

  const clickButton = () => {
    setLoading(true)
    dispatch(SampleThunk({ page: Counts }))
    dispatch(increment(Counts + 1))
  }

  const pageRef = useRef({
    PageNow: 1,
    RowRange: 5,
  });

  const handleChangePage = () => {
    console.log(pageRef.current);
  }

  return (
    <div>
      <Button variant='primary' onClick={clickButton}>
        <MyIcon iconName="Search" size={23} style={{ marginRight: "10px" }} />Search
      </Button>
      <div>Click {Counts} times</div>
      <div style={{ width: "80%", margin: "0 auto" }}>
        {
          isLoading ? <Spinner animation="border" role="status" /> :
            <div>
              {
                data.length === 0 ? <div>no data yet</div> :
                  <div>
                    <Table striped bordered hover size="sm">
                      <thead>
                        <tr>
                          <td>TID</td>
                          <td>TName</td>
                          <td>TDes</td>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          data.map(item => (
                            <tr key={item["TID"]}>
                              <td>{item["TID"]}</td>
                              <td>{item["TName"]}</td>
                              <td>{item["TDes"]}</td>
                            </tr>
                          ))
                        }
                      </tbody>
                    </Table>
                    <Paging
                      RowCounts={100}
                      onChangePage={handleChangePage}
                    ></Paging>
                  </div>
              }
            </div>
        }
      </div>
    </div>
  )
}

export default ShowTable