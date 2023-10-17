import React, { forwardRef, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MySelectDouble = forwardRef(({data1, data2, label, labelWidth=2, input1Width=5, input2Width=5 }, ref) => {
    const [_value, setValue] = useState("")
    
    const onInput1 = ({target:{value}}) => {
        ref[0].current = value
        setValue(value)
    }

    const onInput2 = ({target:{value}}) => {
        ref[1].current = value
    }

    return(
        <Form.Group as={Row} className="mb-3" controlId={`form${label}`}>
          <Form.Label column sm={labelWidth}>{label}</Form.Label>
          <Col sm={input1Width}>
            <Form.Select name={label} onChange={onInput1}>
            <option value="" defaultValue>Choose</option>
            {
                data1.map(item => {
                    return <option key={item.Value} value={item.Value}>{item.Label}</option>
                })
            }
            </Form.Select>
          </Col>
          <Col sm={input2Width}>
            <Form.Select name={label} onChange={onInput2}>
            <option value="" defaultValue>Choose</option>
            {
                data2.filter(item => item.Parent === _value)
                .map(item => {
                    return <option key={item.Value} value={item.Value}>{item.Label}</option>
                })
            }
            </Form.Select>
          </Col>
        </Form.Group>
    )
})

export default MySelectDouble