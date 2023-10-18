import React from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import MyIcon from '../MyIcon';

const FullBody = ({ data }) => {
  return (
    <>
      {
        data.map(row => (
          <div>
            <div style={{ padding: "12px" }}>
              <Offcanvas.Title>
                <span>{row.Name}</span>
              </Offcanvas.Title>
              <Offcanvas.Body>
                {
                  row.Children.map(child => (
                    <ListGroup.Item
                      as={Link}
                      key={child.Label}
                      action
                      to={child.Link}
                    >
                      <MyIcon iconName={child.Icon} size={24} />
                      <span style={{ marginLeft: "7px" }}>{child.Label}</span>
                    </ListGroup.Item>
                  )
                  )
                }
              </Offcanvas.Body>
            </div>
            <hr />
          </div>
        ))
      }
    </>
  )
}

export default FullBody