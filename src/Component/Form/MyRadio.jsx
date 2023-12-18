import { forwardRef } from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MyRadio = forwardRef(({data, label, offset=2}, ref) => {
    const onRadio = ({target:{value}}) => {
        ref.current = value
  	}

    return(
        <Form.Group as={Row} className="mb-3" controlId={`form${label}`}>
          <Col md={offset}>
          <Form.Label>{label}</Form.Label>
          </Col>
          <Col md={12-offset}>
          {
            data.map(item => {
                return <Form.Check 
                  inline
                  key={item.Label}
                  label={item.Label}
                  name={label}
                  type="radio"
                  value={item.Value}
                  onChange={onRadio}
                />
            })
          }
          </Col>
        </Form.Group>
    )
})

export default MyRadio