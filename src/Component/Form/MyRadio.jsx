import React, { forwardRef } from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MyRadio = forwardRef(({data, label, labelWidth=2, inputWidth=10}, ref) => {
    const onRadio = ({target:{value}}) => {
        ref.current = value
  	}

    return(
        <Form.Group as={Row} className="mb-3" controlId={`form${label}`}>
          <Form.Label column sm={labelWidth}>{label}</Form.Label>
          <Col sm={inputWidth}>
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