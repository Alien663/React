import { Nav, Navbar, Container, Row, Col, Dropdown, DropdownButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyIcon from '../MyIcon';

import '../../Style/Bar.css'

function AppBar(props) {
  const {handleShowList} = props
  const AccontName = "Alien663"
  return (
    <>
      <Navbar className='App-Bar' bg="primary" data-bs-theme="dark" fixed='top' expand="lg" >
        <div id="app-bar-background" style={{
          zIndex: -1,
          height: "62px",
          opacity: 1,
          position: "absolute",
          width: "100%",
          background: "while",
        }}></div>
        <Container as="div" className='app-bar-container' fluid={true}>
          <Row style={{width: "100%"}}>
            <Col md={4}>
              <Nav>
                <Nav.Link onClick={handleShowList}>
                  <MyIcon iconName="List" color= "white" size={30}/>
                </Nav.Link>

                <Navbar.Brand as={Link} to="/" >
                  <MyIcon iconName="Gear" /> {' '} React Bootstrap
                </Navbar.Brand>
              </Nav>
            </Col>
            <Col md={4}></Col>
            <Col md={4}>
              <div style={{justifyContent: "flex-end", textAlign: 'right'}}>
                <DropdownButton id="dropdown-menu" align="end" title={AccontName}>
                  <Dropdown.Item eventKey={1} as={Link} to="#hello">Profile</Dropdown.Item>
                  <Dropdown.Divider/>
                  <Dropdown.Item eventKey={2} as={Link} to="#hello">Logout</Dropdown.Item>
                </DropdownButton>
              </div>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
}

export default AppBar;