import { useState } from "react";
import MyStepper from "../../Component/MyStepper";
import { Button } from "react-bootstrap";

const data = ["item 1", "item 2", "item 3", "item 4"]

const Steper = (props) => {
  const [step, setStep] = useState(0)

  const nextStep = () => {
    if (step < data.length) setStep(step + 1)
  }

  const lastStep = () => {
    if (step > 0) setStep(step - 1)
  }

  const resetStep = () => {
    setStep(0)
  }

  return (
    <>
      <br></br>
      <MyStepper data={data} step={step}></MyStepper>
      <div>
        <Button variant="outline-primary" onClick={lastStep}>Back</Button>
        <Button variant="outline-primary" onClick={nextStep}>Next</Button>
        <Button variant="outline-primary" onClick={resetStep}>Reset</Button>
      </div>
    </>
  )
}
export default Steper