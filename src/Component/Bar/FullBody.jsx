import React from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Button, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import MyIcon from '../MyIcon';

const FullBody = ({ data }) => {
  return (
    <div className='sidebar-fullbody customized-scrollbar'>
      {
        data.map(row => (
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
                  row.Children.map(child => (
                    <ListGroup.Item
                      as={Link}
                      key={child.Label}
                      action
                      to={child.Link}
                    >
                      <Button variant="light" style={{
                        width: "100%",
                        textAlign: "left",
                        "--bs-btn-bg": "#ffffff",
                        "--bs-btn-border-width": "0px"
                      }}>
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