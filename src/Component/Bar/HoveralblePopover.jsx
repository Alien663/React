import React, { useState } from 'react'
import { ListGroup } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { OverlayTrigger, Popover } from "react-bootstrap"
import { Link } from 'react-router-dom';
import MyIcon from '../MyIcon';

import '../../Style/Bar.css'

const HoverablePopover = (props) => {
  const { titleName, listitems, iconName } = props
  const [show, setShow] = useState(false)

  const handleMouseEnter = () => {
    setShow(true)
  }
  const handleMouseLeave = () => {
    setShow(false)
  }

  return (
    <OverlayTrigger
      show={show}
      placement="right-start"
      delay={350}
      style={{
        height: "74px",
        width: "64px",
      }}
      overlay={
        <Popover id="popover-basic" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Popover.Header as="h3">{titleName}</Popover.Header>
          <Popover.Body bsPrefix='no'>
            <ListGroup>
              {
                listitems.map(item => {
                  return <ListGroup.Item
                    as={Link}
                    key={item.Label}
                    action
                    to={item.Link}
                  >
                    <MyIcon iconName={item.Icon} size={24} />
                    <span style={{ marginLeft: "7px" }}>{item.Label}</span>
                  </ListGroup.Item>
                })
              }
            </ListGroup>
          </Popover.Body>
        </Popover>
      }>
      <div>
        <Button
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          variant="light"
          className="align-items-center"
          style={{
            padding: "16px 0 14px 0",
            width: "72px",
          }}
        >
          <MyIcon iconName={iconName} size={24} />
          <span className='app-list-iconitem'>
            {titleName}
          </span>
        </Button>
      </div>
    </OverlayTrigger>
  )
}
export default HoverablePopover