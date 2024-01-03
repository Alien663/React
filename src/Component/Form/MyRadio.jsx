import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MyRadio = ({ data, label, offset = 2, value, handleChangeValue }) => {
  return (
    <Form.Group as={Row} className="mb-3" controlId={`form${label}`}>
      <Col md={offset}>
        <Form.Label>{label}</Form.Label>
      </Col>
      <Col md={12 - offset}>
        {
          data.map(item => {
            return (
              <Form.Check
                inline
                key={item.Label}
                label={item.Label}
                name={label}
                type="radio"
                value={item.Value}
                checked={item.Value === parseInt(value)}
                onChange={(e) => {
                  handleChangeValue(e.target.value)}
                }
              />
            )
          })
        }
      </Col>
    </Form.Group>
  )
}

export default MyRadio