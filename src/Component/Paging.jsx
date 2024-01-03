import { useState } from 'react'
import Pagination from 'react-bootstrap/Pagination';
import Form from 'react-bootstrap/Form';

const Paging = ({ RowCounts, onChangePage }) => {
  const [_page, setPage] = useState(1)
  const [_rows, setRowRange] = useState(5)
  const [isPageError, setIsPageError] = useState(false)
  const RowRanges = [5, 10, 20, 50]
  const PageMax = Math.ceil(RowCounts / _rows)

  const handleChangePage = (page) => {
    if (page <= PageMax && page >= 1) {
      setPage(page)
    }
    else if (page < 1) {
      setPage(1)
    }
    else if (page > PageMax) {
      setPage(PageMax)
    }
    onChangePage()
  }

  const handleChangeRowRange = (e) => {
    setRowRange(parseInt(e.target.value))
    setPage(1)
    onChangePage()
  }

  const handleChangeInput = () => {
    if(isPageError) setIsPageError(false)
  }

  return (
    <>
      <Pagination>
        <Pagination.First linkStyle={{ fontSize: "20px" }} onClick={() => { handleChangePage(1) }} />
        <Pagination.Prev linkStyle={{ fontSize: "20px" }} onClick={() => { handleChangePage(_page - 1) }} />
        {
          _page <= 2 ? <></> : <Pagination.Ellipsis linkStyle={{ fontSize: "20px" }} disabled />
        }
        {
          _page === 1 ? <></> : <Pagination.Item linkStyle={{ fontSize: "20px" }} onClick={() => { handleChangePage(_page - 1) }}>{_page - 1}</Pagination.Item>
        }
        <Pagination.Item linkStyle={{ fontSize: "20px" }} active>{_page}</Pagination.Item>
        {
          _page === PageMax ? <></> : <Pagination.Item linkStyle={{ fontSize: "20px" }} onClick={() => { handleChangePage(_page + 1) }}>{_page + 1}</Pagination.Item>
        }
        {
          _page >= PageMax - 2 ? <></> : <Pagination.Ellipsis linkStyle={{ fontSize: "20px" }} disabled />
        }
        {
          _page >= PageMax - 1 ? <></> : <Pagination.Item linkStyle={{ fontSize: "20px" }} onClick={() => { handleChangePage(PageMax) }}>{PageMax}</Pagination.Item>
        }
        <Pagination.Next linkStyle={{ fontSize: "20px" }} onClick={() => { handleChangePage(_page + 1) }} />
        <Pagination.Last linkStyle={{ fontSize: "20px" }} onClick={() => { handleChangePage(PageMax) }} />
        <Pagination.Item>
          <Form.Select onChange={handleChangeRowRange} size="sm">
            {
              RowRanges.map(item => {
                return item === _rows ?
                  <option key={item} defaultValue value={String(item)}>{item}</option> :
                  <option key={item} value={String(item)}>{item}</option>
              })
            }
          </Form.Select>
        </Pagination.Item>
        <Pagination.Item>
          <Form.Control
            isInvalid={isPageError}
            onChange={handleChangeInput}
            onKeyDown={(el) => {
              if (el.key === "Enter") {
                let temp = parseInt(el.target.value)
                if(temp >= 1 && temp <= PageMax) handleChangePage(temp)
                else setIsPageError(true)
              }
            }}
            size="sm" type="number" placeholder="enter goto page" />
        </Pagination.Item>
      </Pagination>
    </>
  )
}

export default Paging