import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MySelectDouble = ({ label, option1, option2, value1, value2, handleChangeValue1, handleChangeValue2, offset = 2, md1 = parseInt((12 - offset) / 2) }) => {
  return (
    <Form.Group as={Row} className="mb-3" controlId={`form${label}`}>
      <Col md={offset}>
        <Form.Label>{label}</Form.Label>
      </Col>
      <Col md={md1}>
        <Form.Select name={label} onChange={(e) => handleChangeValue1(e.target.value)}>
          <option value="" defaultValue>Choose</option>
          {
            option1.map(item => {
              return <option key={item.Value} value={item.Value}>{item.Label}</option>
            })
          }
        </Form.Select>
      </Col>
      <Col md={12 - offset - md1}>
        <Form.Select name={label} onChange={(e) => handleChangeValue2(e.target.value)}>
          <option value="" defaultValue>Choose</option>
          {
            option2.map(item => {
              return <option key={item.Value} value={item.Value}>{item.Label}</option>
            })
          }
        </Form.Select>
      </Col>
    </Form.Group>
  )
}

export default MySelectDouble