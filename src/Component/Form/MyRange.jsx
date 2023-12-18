import { useState, forwardRef } from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MyRange = forwardRef(({ label, min = 0, max = 10, step = 1, offset = 2 }, ref) => {
  const [_value, setValue] = useState(ref.current)
  const onInput = ({ target: { value } }) => {
    ref.current = value
    setValue(value)
  }

  return (
    <Form.Group as={Row} className="mb-3" controlId={`form${label}`}>
      <Col md={offset}>
        <Form.Label>{label}:{_value}</Form.Label>
      </Col>
      <Col md={12 - offset}>
        <Form.Range
          min={min}
          max={max}
          step={step}
          onChange={onInput} />
      </Col>
    </Form.Group>
  )
})

export default MyRange