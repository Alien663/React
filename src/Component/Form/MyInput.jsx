import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MyInput = ({ label, offset=2, handleChangeValue, ...props }, ref) => {
  return (
    <Form.Group as={Row} controlId={`form${label}`}>
      <Col md={offset}>
        <Form.Label>{label}</Form.Label>
      </Col>
      <Col md={12-offset}>
        <Form.Control name={label} {...props} onChange={(e) => handleChangeValue(e.target.value)} />
      </Col>
    </Form.Group>
  )
}

export default MyInput
