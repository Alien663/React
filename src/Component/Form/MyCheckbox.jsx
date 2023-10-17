import React, { forwardRef } from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MyCheckbox = forwardRef(({data, label, labelWidth=2, inputWidth=10}, ref) => {
    const onCheckbox = ({target:{checked, value}}) => {
        checked? ref.current.push(value) : ref.current.pop(value)
	  }

    return(
        <Form.Group as={Row} className="mb-3" controlId={`form${label}`}>
          <Form.Label column sm={labelWidth}>{label}</Form.Label>
          <Col sm={inputWidth}>
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