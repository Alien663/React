import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MyCheckbox = ({ data, label, offset = 2, values, handleChangeValue }) => {
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
                key={item.Label}
                inline label={item.Label}
                name={label}
                type="checkbox"
                value={item.Value}
                checked={values.some(el => el === item.Value.toString())}
                onChange={(e) => {
                  e.target.checked ? handleChangeValue([...values, e.target.value]) :
                  handleChangeValue(values.filter(item => item !== e.target.value.toString()))
                }}
              />
            )
          })
        }
      </Col>
    </Form.Group>
  )
}

export default MyCheckbox