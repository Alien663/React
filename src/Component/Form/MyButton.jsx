import Button from "react-bootstrap/Button"

const MyButton = (props) => {
  return(
    <>
      <style>
        {`
        .btn-flat {
          background-color: purple;
          color: white;
        }
    
        .btn-xxl {
          padding: 1rem 1.5rem;
          font-size: 1.5rem;
        }
        `}
      </style>
      <Button variant="flat" size="xxl">
        flat button
      </Button>
    </>
  )
}

export default MyButton