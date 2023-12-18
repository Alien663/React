import { forwardRef } from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MyCheckbox = forwardRef(({ data, label, offset = 2 }, ref) => {
  const onCheckbox = ({ target: { checked, value } }) => {
    checked ? ref.current.push(value) : ref.current.pop(value)
  }

  return (
    <Form.Group as={Row} className="mb-3" controlId={`form${label}`}>
      <Col md={offset}>
        <Form.Label>{label}</Form.Label>
      </Col>
      <Col md={12 - offset}>
        {
          data.map(item => {
            return <Form.Check
              key={item.Label}
              inline label={item.Label}
              name={label}
              type="checkbox"
              value={item.Value}
              onChange={onCheckbox}
            />
          })
        }
      </Col>
    </Form.Group>
  )
})

export default MyCheckbox