import { forwardRef, useMemo, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MySelectDouble = forwardRef(({ data1, data2, label, offset = 2, md1 = parseInt((12 - offset) / 2) }, ref) => {
  const [_value, setValue] = useState("")

  const onInput1 = ({ target: { value } }) => {
    ref[0].current = value
    setValue(value)
  }

  const onInput2 = ({ target: { value } }) => {
    ref[1].current = value
  }

  const _data2 = useMemo(() => {
    return data2.filter(item => item.Parent === _value)
  }, [_value, data2])

  return (
    <Form.Group as={Row} className="mb-3" controlId={`form${label}`}>
      <Col md={offset}>
        <Form.Label>{label}</Form.Label>
      </Col>
      <Col md={md1}>
        <Form.Select name={label} onChange={onInput1}>
          <option value="" defaultValue>Choose</option>
          {
            data1.map(item => {
              return <option key={item.Value} value={item.Value}>{item.Label}</option>
            })
          }
        </Form.Select>
      </Col>
      <Col md={12 - offset - md1}>
        <Form.Select name={label} onChange={onInput2}>
          <option value="" defaultValue>Choose</option>
          {
            _data2.map(item => {
              return <option key={item.Value} value={item.Value}>{item.Label}</option>
            })
          }
        </Form.Select>
      </Col>
    </Form.Group>
  )
})

export default MySelectDouble