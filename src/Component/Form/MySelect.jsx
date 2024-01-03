import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MySelect = ({ data, label, offset = 2, value, onChangeValue }) => {
  return (
    <Form.Group as={Row} className="mb-3" controlId={`form${label}`}>
      <Col md={offset}>
        <Form.Label>{label}</Form.Label>
      </Col>
      <Col md={12 - offset}>
        <Form.Select name={label} value={value} onChange={(e) => onChangeValue(e.target.value)}>
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
}

export default MySelect