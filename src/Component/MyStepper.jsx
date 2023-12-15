import '../Style/Stepper.css'

const MyStepper = ({ data, step }) => {
  return (
    <ol className="list">
      {
        data.map((item, idx) => (
          <li key={item} className={idx===step? "active" : ""}>{idx+1}</li>
        ))
      }
    </ol>
  )
}

export default MyStepper