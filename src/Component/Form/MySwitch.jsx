import { forwardRef } from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MySwitch = forwardRef(({ label, offset = 2, value, handleChangeValue }, ref) => {
  return (
    <Form.Group as={Row} className="mb-3" controlId={`form${label}`}>
      <Col md={offset}>
        <Form.Label>{label}</Form.Label>
      </Col>
      <Col md={12 - offset}>
        <Form.Check name={label} checked={value} onChange={(e) => handleChangeValue(e.target.checked)} type="switch" />
      </Col>
    </Form.Group>
  )
})

export default MySwitch