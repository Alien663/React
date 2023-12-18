import { useState, useRef, forwardRef } from 'react'
import Pagination from 'react-bootstrap/Pagination';
import Form from 'react-bootstrap/Form';

const Paging = forwardRef((props, ref) => {
    const { RowCounts, onChangePage = () => {} } = props
    const [_page, setPageNow] = useState(1)
    const [_rows, setRowRange] = useState(ref.current.RowRange)
    
    const pageRef = useRef()
    const RowRanges = [5, 10, 20, 50]
    const PageMax = Math.ceil(RowCounts/_rows)

    const handleChangePage = (page) => {
        if(page <= PageMax && page >= 1){
            setPageNow(page)
        }
        else if(page < 1){
            setPageNow(1)
        }
        else if(page > PageMax){
            setPageNow(PageMax)
        }
        ref.current = {
            PageNow: page,
            RowRange: _rows
        }
        onChangePage()
    }

    const handleChangeRowRange = (e) => {
        setRowRange(parseInt(e.target.value))
        setPageNow(1)
        ref.current = {
            PageNow: 1,
            RowRange: parseInt(e.target.value)
        }
        onChangePage()
    }

    return (
        <>
          <Pagination>
            <Pagination.First onClick={() => {handleChangePage(1)}}/>
            <Pagination.Prev onClick={() => {handleChangePage(_page-1)}}/>
            {
                _page <= 2 ? <></> : <Pagination.Ellipsis disabled />
            }
            {
                _page === 1? <></> : <Pagination.Item onClick={() => {handleChangePage(_page-1)}}>{_page-1}</Pagination.Item>
            }
            <Pagination.Item active>{_page}</Pagination.Item>
            {
                _page === PageMax ? <></> : <Pagination.Item onClick={() => {handleChangePage(_page+1)}}>{_page+1}</Pagination.Item>
            }
            {
                _page >= PageMax-2 ? <></> : <Pagination.Ellipsis disabled />
            }
            {
                _page >= PageMax-1 ? <></> : <Pagination.Item onClick={() => {handleChangePage(PageMax)}}>{PageMax}</Pagination.Item>
            }
            <Pagination.Next onClick={() => {handleChangePage(_page+1)}}/>
            <Pagination.Last onClick={() => {handleChangePage(PageMax)}}/>
            <Pagination.Item>
              <Form.Select onChange={handleChangeRowRange} size="sm">
              {
                  RowRanges.map(item => {
                      return item === _rows?
                        <option key={item} defaultValue value={String(item)}>{item}</option>:
                        <option key={item} value={String(item)}>{item}</option>
                  })
              }
              </Form.Select>
            </Pagination.Item>
            <Pagination.Item>
              <Form.Control ref={pageRef} onKeyDown={(el) => {
                  if(el.key === "Enter"){
                      handleChangePage(parseInt(pageRef.current.value))
                  }
              }}
              size="sm" type="number" placeholder="enter goto page"/>
            </Pagination.Item>
          </Pagination>
        </>
      )
}) 

export default Paging