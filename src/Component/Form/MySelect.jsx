import { forwardRef } from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MySelect = forwardRef(({ data, label, offset = 2 }, ref) => {
  const onInput = ({ target: { value } }) => {
    ref.current = value
  }

  return (
    <Form.Group as={Row} className="mb-3" controlId={`form${label}`}>
      <Col md={offset}>
        <Form.Label>{label}</Form.Label>
      </Col>
      <Col md={12 - offset}>
        <Form.Select name={label} onChange={onInput}>
          <option value="" defaultValue>Choose</option>
          {
            data.map(item => {
              return <option key={item.Value} value={item.Value}>{item.Label}</option>
            })
          }
        </Form.Select>
      </Col>
    </Form.Group>
  )
})

export default MySelect