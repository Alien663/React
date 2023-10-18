import Offcanvas from 'react-bootstrap/Offcanvas';
import IconBody from './IconBody';
import FullBody from './FullBody';
import '../../Style/Bar.css'

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
          show ? <FullBody data={data} /> : <IconBody data={data}/>
        }
      </Offcanvas.Body>
    </Offcanvas>
  </>
}

export default LeftSideBar;