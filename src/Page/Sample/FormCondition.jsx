import { useState, useMemo } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import MyInput from '../../Component/Form/MyInput';
import MySwitch from '../../Component/Form/MySwitch';
import MyRadio from '../../Component/Form/MyRadio';
import MyCheckbox from '../../Component/Form/MyCheckbox';
import MyRange from '../../Component/Form/MyRange';
import MySelect from '../../Component/Form/MySelect';
import MySelectDouble from '../../Component/Form/MySelectDouble';
import MyIcon from '../../Component/MyIcon'

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

const FormCondition = (props) => {
  const [email, setEMail] = useState("")
  const [selector1, setSelector1] = useState("")
  const [isSwitch, setIsSwitch] = useState(false)
  const [radio, setRadio] = useState("")
  const [checkbox, setCheckbox] = useState([])
  const [textArea, setTextArea] = useState("")
  const [RangeStep, setRangeStep] = useState(3)
  const [selector2_1, setSelector2_1] = useState("")
  const [selector2_2, setSelector2_2] = useState("")
  const [date, setDate] = useState("")
  const [file, setFile] = useState(undefined)

  const Op2 = useMemo(() => {
    return Option2.filter(item => item.Parent === selector2_1)
  }, [selector2_1])

  const handleSearch = () => {
    window.alert(
      JSON.stringify({
        EMail: email,
        Level: selector1,
        Open: isSwitch,
        RadioType: radio,
        Tags: checkbox,
        Remark: textArea,
        Score: RangeStep,
        Level1: selector2_1,
        Level2: selector2_2,
        Date: date,
        UploadFIle: file
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
            <MyInput label="Email" value={email} handleChangeValue={(value) => setEMail(value)} />
          </Col>
          <Col>
            <MySelect data={Option1} label="Select" value={selector1} handleChangeValue={(value) => setSelector1(value)} />
          </Col>
          <Col>
            <MySwitch label="Switch Slider" value={isSwitch} handleChangeValue={(value) => setIsSwitch(value)} />
          </Col>
        </Row>
        <Row>
          <Col>
            <MyRadio
              data={[
                { Label: "1", Value: 1 },
                { Label: "2", Value: 2 },
                { Label: "3", Value: 3 },
              ]}
              label="Radio"
              value={radio}
              handleChangeValue={(value) => {
                console.log(value)
                setRadio(value)
              }}
            />
          </Col>
          <Col>
            <MyCheckbox
              data={[
                { Label: "1", Value: 1 },
                { Label: "2", Value: 2 },
                { Label: "3", Value: 3 },
              ]}
              label="Checkbox"
              values={checkbox}
              handleChangeValue={(values) => {
                console.log(values)
                setCheckbox(values)
              }}
            />
          </Col>
          <Col>
            <MyInput as="textarea" label="Text Area" value={textArea} handleChangeValue={(value) => setTextArea(value)} />
          </Col>
        </Row>
        <Row>
          <Col>
            <MyRange
              label="Range"
              min={0}
              max={10}
              step={RangeStep}
              handleChangeValue={(value) => setRangeStep(value)}
            />
          </Col>
          <Col>
            <MySelectDouble
              label="Double Select"
              option1={Option1}
              option2={Op2}
              value1={selector2_1}
              value2={selector2_2}
              handleChangeValue1={(value) => setSelector2_1(value)}
              handleChangeValue2={(value) => setSelector2_2(value)}
            />
          </Col>
          <Col>
            <MyInput type="Date" label="Date" value={date} handleChangeValue={(value) => setDate(value)} />
          </Col>
        </Row>
        <Row>
          <Col>
            <MyInput label="File" type="file" value={file} handleChangeValue={(value) => setFile(value)} />
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