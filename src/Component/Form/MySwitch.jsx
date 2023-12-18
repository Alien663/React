import { forwardRef } from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MySwitch = forwardRef(({label, labelWidth=2, inputWidth=10}, ref) => {
    const onSwitch = ({target:{checked}}) => {
        ref.current = checked
		}

    return(
        <Form.Group as={Row} className="mb-3" controlId={`form${label}`}>
          <Form.Label column sm={labelWidth}>{label}</Form.Label>
          <Col sm={inputWidth}>
            <Form.Check name={label} onChange={onSwitch} type="switch"/>
          </Col>
        </Form.Group>
    )
})

export default MySwitch