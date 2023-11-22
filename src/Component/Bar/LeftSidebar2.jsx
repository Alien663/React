import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "../../Style/LeftSidebar2.css"

const LeftSidebar2 = ({ data }) => {
  return (
    <>
      <input type="checkbox" name="" id="side-menu-switch" />
      <div class="side-menu">
        <form>
          <input type="search" placeholder="請輸入關鍵字" />
          <button><i class="fa fa-search"></i></button>
        </form>
        <nav>
          {
            data.map(item => (
              <Link to="#test">{item.Name}</Link>
            ))
          }
        </nav>
        <label for="side-menu-switch">
          <i class="fa fa-angle-right"></i>
        </label>
      </div>
    </>
  )
}
export default LeftSidebar2