import { forwardRef } from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MyInput = forwardRef(({ label, offset=2, ...props }, ref) => {
  const onInput = ({ target: { value } }) => {
    ref.current = value
  }

  return (
    <Form.Group as={Row} controlId={`form${label}`}>
      <Col md={offset}>
        <Form.Label>{label}</Form.Label>
      </Col>
      <Col md={12-offset}>
        <Form.Control name={label} {...props} onChange={onInput} />
      </Col>
    </Form.Group>
  )
})

export default MyInput