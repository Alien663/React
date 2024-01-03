import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MyRange = ({ label, min = 0, max = 10, step = 1, offset = 2, handleChangeValue }) => {
  return (
    <Form.Group as={Row} className="mb-3" controlId={`form${label}`}>
      <Col md={offset}>
        <Form.Label>{label}:{step}</Form.Label>
      </Col>
      <Col md={12 - offset}>
        <Form.Range
          min={min}
          max={max}
          value={step}
          onChange={(e) => handleChangeValue(e.target.value)} />
      </Col>
    </Form.Group>
  )
}

export default MyRange
