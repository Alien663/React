import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"

import { AppMenuThunk } from '../Store/AppMenu'
import AppBar from '../Component/Bar/AppBar';
import LeftSidebar2 from '../Component/Bar/LeftSidebar2';

import '../Style/App.css';

function App2() {
  const dispatch = useDispatch()
  const appMenuData = useSelector((state) => state.AppMenu.menudata)
  const [isSidebarCollasped, setCollasped] = useState(false)
  const handleShowSideBar = () => {
    setCollasped(!isSidebarCollasped);
  };

  useEffect(() => {
    dispatch(AppMenuThunk())
  }, [dispatch])

  return (
    <div className='App'>
      <AppBar handleShowList={handleShowSideBar}></AppBar>
      <LeftSidebar2 data={appMenuData}></LeftSidebar2>
      <div className={`main-body ${isSidebarCollasped ? "Router-OpenList" : "Router-CloseList"}`}>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default App2;
