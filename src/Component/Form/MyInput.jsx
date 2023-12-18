import { forwardRef } from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MyInput = forwardRef(({ label, labelWidth = 2, inputWidth = 10, ...props }, ref) => {
  const onInput = ({ target: { value } }) => {
    ref.current = value
  }

  return (
    <Form.Group as={Row} controlId={`form${label}`}>
      <Form.Label column sm={labelWidth}>{label}</Form.Label>
      <Col sm={inputWidth}>
        <Form.Control name={label} {...props} onChange={onInput} />
      </Col>
    </Form.Group>
  )
})

export default MyInput