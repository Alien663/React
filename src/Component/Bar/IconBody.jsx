import React, { useState } from 'react'
import { ListGroup } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { OverlayTrigger, Popover } from "react-bootstrap"
import { Link } from 'react-router-dom';
import MyIcon from '../MyIcon';

import '../../Style/Bar.css'

const HoverPopover = ({ titleName, listitems, iconName, rowidx, location, onChangeLocation }) => {
  const [hoverShow, setHoverShow] = useState(false)
  const [clickShow, setClickShow] = useState(false)

  const handleMouseEnter = () => {
    setHoverShow(true)
  }
  const handleMouseLeave = () => {
    setHoverShow(false)
  }
  const handelMouseClick = () => {
    setClickShow(!clickShow)
  }

  return (
    <OverlayTrigger
      show={hoverShow || clickShow}
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
                listitems.map((item, idx) => (
                  <ListGroup.Item
                    as={Link}
                    key={item.Label}
                    action
                    to={item.Link}
                    onClick={() => onChangeLocation([rowidx,idx])}
                    active={rowidx === location[0] && idx === location[1]}
                    style={{
                      "--bs-list-group-action-hover-bg": "#d3d4d5"
                    }}
                  >
                    <MyIcon iconName={item.Icon} size={24} />
                    <span style={{ marginLeft: "7px" }}>{item.Label}</span>
                  </ListGroup.Item>
                ))
              }
            </ListGroup>
          </Popover.Body>
        </Popover>
      }>
      <div>
        <Button
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handelMouseClick}
          variant="light"
          active={clickShow}
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

const IconBody = ({ data, location, onChangeLocation }) => {
  return (
    <>
      {
        data.map((item, idx) => {
          return (
            <HoverPopover
              key={item.Name}
              titleName={item.Name}
              listitems={item.Children}
              iconName={item.Icon}
              rowidx={idx}
              location={location}
              onChangeLocation={onChangeLocation}
            >
            </HoverPopover>
          )
        })
      }
    </>
  )
}

export default IconBody