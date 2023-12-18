import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import MyIcon from '../MyIcon';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Style/Bar.css'

function AppBar(props) {
  const { handleShowList } = props
  const AccontName = "Alien663"
  return (
    <>
      <Navbar className='App-Bar' bg="primary" data-bs-theme="dark" fixed='top' expand="lg" >
        <div id="app-bar-background" className='app-bar-background'></div>
        <Container as="div" className='app-bar-container' fluid={true}>
          <Row style={{ width: "100%" }}>
            <Col md={4}>
              <Nav>
                <Nav.Link onClick={handleShowList}>
                  <MyIcon iconName="List" color="white" size={30}></MyIcon>
                </Nav.Link>
                <Navbar.Brand as={Link} to="/" >
                  <MyIcon iconName="Gear" /> {' '} React Bootstrap
                </Navbar.Brand>
              </Nav>
            </Col>
            <Col md={{span:4, offset: 4}}>
              <div style={{ justifyContent: "flex-end", textAlign: 'right' }}>

                <DropdownButton
                  id="dropdown-menu"
                  data-bs-theme="light"
                  align="end"
                  title={
                    <span>
                      <MyIcon iconName="PersonCircle" size={23} style={{ marginRight: "10px" }} />
                      {AccontName}
                    </span>
                  }>
                  <Dropdown.Item eventKey={1} as={Link} to="#hello">
                    <MyIcon iconName="PersonVcard" style={{ marginRight: "10px" }} size={20}></MyIcon>
                    Profile
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey={2} as={Link} to="#hello">
                    <MyIcon iconName="BoxArrowDownLeft" style={{ marginRight: "10px" }}></MyIcon>
                    Logout
                  </Dropdown.Item>
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