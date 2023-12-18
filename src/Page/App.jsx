import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"

import AppBar from '../Component/Bar/AppBar';
import { AppMenuThunk } from '../Store/AppMenu'
import LeftSideBar from '../Component/Bar/LeftSidebar';
import '../Style/App.css';

function App() {
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
      <LeftSideBar
        show={isSidebarCollasped}
        handleShow={handleShowSideBar}
        data={appMenuData}
      ></LeftSideBar>
      <div className={`main-body ${isSidebarCollasped ? "Router-OpenList" : "Router-CloseList"}`}>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default App;
