import React, { useRef } from 'react'
import { Button, Form, Container, Row, Col } from 'react-bootstrap';

import MyInput from '../../Component/Form/MyInput';
import MySwitch from '../../Component/Form/MySwitch';
import MyRadio from '../../Component/Form/MyRadio';
import MyCheckbox from '../../Component/Form/MyCheckbox';
import MyRange from '../../Component/Form/MyRange';
import MySelect from '../../Component/Form/MySelect';
import MySelectDouble from '../../Component/Form/MySelectDouble';
import MyIcon from '../../Component/MyIcon'

const FormCondition = (props) => {
  const Option1 = [
    {
      Label: "Level 1 : 1",
      Value: "1"
    },
    {
      Label: "Level 1 : 2",
      Value: "2"
    },
    {
      Label: "Level 1 : 3",
      Value: "3"
    },
    {
      Label: "Level 1 : 4",
      Value: "4"
    },
  ]

  const Option2 = [
    {
      Parent: "1",
      Label: "Level 2 : 1",
      Value: "10"
    },
    {
      Parent: "1",
      Label: "Level 2 : 2",
      Value: "11"
    },
    {
      Parent: "1",
      Label: "Level 2 : 3",
      Value: "12"
    },
    {
      Parent: "2",
      Label: "Level 2 : 4",
      Value: "13"
    },
    {
      Parent: "3",
      Label: "Level 2 : 5",
      Value: "14"
    },
    {
      Parent: "3",
      Label: "Level 2 : 6",
      Value: "15"
    },
  ]

  const D1 = useRef("")
  const D2 = useRef("")
  const D3 = useRef(false)
  const D4 = useRef(undefined)
  const D5 = useRef([])
  const D6 = useRef("")
  const D7 = useRef(0)
  const D8 = useRef("")
  const D9 = useRef("")
  const D10 = useRef("")
  const D11 = useRef(undefined)

  const handleSearch = () => {
    window.alert(
      JSON.stringify({
        D1: D1.current,
        D2: D2.current,
        D3: D3.current,
        D4: D4.current,
        D5: D5.current,
        D6: D6.current,
        D7: D7.current,
        D8: D8.current,
        D9: D9.current,
        D10: D10.current,
        D11: D11.current,
      })
    )
  }

  const handleExport = () => {
    window.alert("Your download started")
  }

  return (
    <Form>
      <Container>
        <Row>
          <Col>
            <MyInput label="Email" ref={D1} />
          </Col>
          <Col>
            <MySelect data={Option1} label="Select" ref={D2} />
          </Col>
          <Col>
            <MySwitch label="Switch Slider" ref={D3} />
          </Col>
        </Row>
        <Row>
          <Col>
            <MyRadio data={[
              { Label: "1", Value: 1 },
              { Label: "2", Value: 2 },
              { Label: "3", Value: 3 },
            ]} label="Radio" ref={D4}
            />
          </Col>
          <Col>
            <MyCheckbox
              data={[
                { Label: "1", Value: 1 },
                { Label: "2", Value: 2 },
                { Label: "3", Value: 3 },
              ]} label="Radio" ref={D5}
            />
          </Col>
          <Col>
            <MyInput as="textarea" label="Text Area" ref={D6} />
          </Col>
        </Row>
        <Row>
          <Col>
            <MyRange
              label="Range"
              min={0}
              max={10}
              step={1}
              ref={D7}
            />
          </Col>
          <Col>
            <MySelectDouble data1={Option1} data2={Option2} label="Double Select" ref={[D9, D10]} />
          </Col>
          <Col>
            <MyInput type="Date" label="Date" ref={D8} />
          </Col>
        </Row>
        <Row>
          <Col>
            <MyInput label="File" type="file" ref={D11} />
          </Col>
          <Col>
            <Button variant='primary' onClick={handleSearch}>
              <MyIcon iconName="Search" size={23} style={{ marginRight: "10px" }} />Search
            </Button>
          </Col>
          <Col>
            <Button variant='success' onClick={handleExport}>
              <MyIcon iconName="CloudArrowDown" size={30} style={{ marginRight: "10px" }} />Export
            </Button>
          </Col>
        </Row>
      </Container>
    </Form>
  )
}
export default FormCondition