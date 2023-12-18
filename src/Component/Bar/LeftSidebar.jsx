import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

import IconBody from './IconBody';
import FullBody from './FullBody';
import '../../Style/Bar.css'

const LeftSideBar = (props) => {
  const [location, setLocation] = useState([-1, -1])
  const { show, handleShow, data } = props

  const onChangeLocation = ([rowidx, colidx]) => {
    setLocation([rowidx, colidx])
  }

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
        fontSize: "15px"
      }}
    >
      <div style={{ minHeight: "62px" }}></div>
      <Offcanvas.Body bsPrefix='no'>
        {
          show ? <FullBody data={data} location={location} onChangeLocation={onChangeLocation} />
            : <IconBody data={data} location={location} onChangeLocation={onChangeLocation} />
        }
      </Offcanvas.Body>
    </Offcanvas>
  </>
}

export default LeftSideBar;