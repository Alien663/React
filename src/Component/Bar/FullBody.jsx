import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup'

import MyIcon from '../MyIcon';

const FullBody = ({ data, location, onChangeLocation }) => {
  return (
    <div className='sidebar-fullbody customized-scrollbar'>
      {
        data.map((row, idxi) => (
          <div key={row.Name}>
            <div style={{ padding: "12px" }}>
              <Offcanvas.Title>
                <span>{row.Name}</span>
              </Offcanvas.Title>
              <Offcanvas.Body style={{
                "--bs-offcanvas-padding-y": 0,
                "--bs-offcanvas-padding-x": 0,
              }}>
                {
                  row.Children.map((child, idxj) => (
                    <ListGroup.Item
                      as={Link}
                      key={child.Label}
                      action
                      to={child.Link}

                    >
                      <Button
                        variant="light"
                        style={{
                          width: "100%",
                          textAlign: "left",
                          "--bs-btn-bg": "#ffffff",
                          "--bs-btn-border-width": "0px",
                          "--bs-btn-active-bg": "#0d6efd",
                          "--bs-btn-active-color": "#ffffff",
                        }}
                        onClick={() => onChangeLocation([idxi, idxj])}
                        active={idxi === location[0] && idxj === location[1]}
                      >
                        <MyIcon iconName={child.Icon} size={24} />
                        <span style={{ marginLeft: "24px" }}>{child.Label}</span>
                      </Button>
                    </ListGroup.Item>
                  )
                  )
                }

              </Offcanvas.Body>
            </div>
            <hr style={{ margin: "0" }} />
          </div>
        ))
      }
    </div>
  )
}

export default FullBody