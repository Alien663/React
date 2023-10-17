import Offcanvas from 'react-bootstrap/Offcanvas';
import { Accordion, Dropdown, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import HoverablePopover from './HoveralblePopover';
import MyIcon from '../MyIcon';

const AccordionBody = ({ data }) => {
  return (
    <>
      {
        data.map(row => (
          <>
            <Offcanvas.Title>{row.Name}</Offcanvas.Title>
            <Offcanvas.Body>
              {
                row.Children.map(child => (
                  <ListGroup.Item as={Link} key={child.Label} action to={child.Link}>
                    <MyIcon iconName={child.Icon} size={24} style={{ paddingLeft: "15px" }} />
                    <span style={{marginLeft: "7px"}}>{child.Label}</span>
                  </ListGroup.Item>
                )
                )
              }
            </Offcanvas.Body>
            <hr />
          </>
        ))
      }
    </>
  )
}

const IconBody = ({ data }) => {
  return <>
    {
      data.map(item => {
        return <HoverablePopover
          key={item.Name}
          titleName={item.Name}
          listitems={item.Children}
          iconName={item.Icon}
        >
        </HoverablePopover>
      })
    }
  </>
}

const LeftSideBar = (props) => {
  const { show, handleShow, data } = props
  return <>
    <Offcanvas
      show={true}
      onHide={handleShow}
      scroll={true}
      backdrop={false}
      style={{
        "--bs-offcanvas-transition": "transform 0s",
        "--bs-offcanvas-zindex": 1000,
        "--bs-offcanvas-width": show ? "240px" : "73px",
        "overflow-y": show ? "scroll" : "",
        fontSize: "15px"
      }}
    >
      <div style={{ minHeight: "62px" }}></div>
      <Offcanvas.Body bsPrefix='no'>
        {
          show ? <AccordionBody data={data} /> : <IconBody data={data} />
        }
      </Offcanvas.Body>
    </Offcanvas>
  </>
}

export default LeftSideBar;