import { useState, forwardRef } from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MyRange = forwardRef(({label, min=0, max=10, step=1, labelWidth=2, inputWidth=10}, ref) => {
    const [_value, setValue] = useState(ref.current)
    const onInput = ({target:{value}}) => {
        ref.current = value
        setValue(value)
    }

    return(
        <Form.Group as={Row} className="mb-3" controlId={`form${label}`}>
          <Form.Label column sm={labelWidth}>{label}:{_value}</Form.Label>
          <Col sm={inputWidth}>
          <Form.Range
              min={min}
              max={max}
              step={step}
              onChange={onInput} />
          </Col>
        </Form.Group>
    )
})

export default MyRange