import Button from 'react-bootstrap/Button'

import '../../Style/Buttons.css'

const ShowButtons = (props) => {
  return (
    <>
      <div style={{
        border: "solid",
        borderColor: "black",
        paddingBottom: "10px"
      }}>
        <h2>Default Variant Button</h2>
        <Button variant="primary">Primary</Button>{' '}
        <Button variant="secondary">Secondary</Button>{' '}
        <Button variant="success">Success</Button>{' '}
        <Button variant="warning">Warning</Button>{' '}
        <Button variant="danger">Danger</Button>{' '}
        <Button variant="info">Info</Button>{' '}
        <Button variant="light">Light</Button>{' '}
        <Button variant="dark">Dark</Button>
        <Button variant="link">Link</Button>
      </div>
      <br></br>
      <div style={{
        border: "solid",
        borderColor: "black",
        paddingBottom: "10px"
      }}>
        <h2>Outline Button</h2>
        <Button variant="outline-primary">Primary</Button>{' '}
        <Button variant="outline-secondary">Secondary</Button>{' '}
        <Button variant="outline-success">Success</Button>{' '}
        <Button variant="outline-warning">Warning</Button>{' '}
        <Button variant="outline-danger">Danger</Button>{' '}
        <Button variant="outline-info">Info</Button>{' '}
        <Button variant="outline-light">Light</Button>{' '}
        <Button variant="outline-dark">Dark</Button>
      </div>
      <br></br>
      <div style={{
        border: "solid",
        borderColor: "black",
        paddingBottom: "10px"
      }}>
        <h2>Custom Color Button</h2>
        <Button variant="flat" size='xxl'>Flat</Button>{' '}
      </div>
    </>
  )
}

export default ShowButtons