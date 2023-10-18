import { useState } from 'react';
import AppBar from '../Component/Bar/AppBar';
import LeftSideBar from '../Component/Bar/LeftSidebar';
import MyRouting from '../Component/Routing';
import '../Style/App.css';

function App() {
  const [isSidebarCollasped, setCollasped] = useState(false)
  const handleShowSideBar = () => {
    setCollasped(!isSidebarCollasped);
  };
  const nestedListData = [
    {
      Name: "Menu 1",
      Icon: "Speedometer2",
      Children: [
        {
          Label: "List Item 1-1",
          Link: "#hello",
          Icon: "Person",
        },
        {
          Label: "List Item 1-2",
          Link: "#hello",
          Icon: "Puzzle",
        },
        {
          Label: "List Item 1-3",
          Link: "#hello",
          Icon: "Grid3x3",
        },
        {
          Label: "List Item 1-4",
          Link: "#hello",
          Icon: "People",
        },
      ],
    },
    {
      Name: "Menu 2",
      Icon: "PcDisplay",
      Children: [
        {
          Label: "List Item 2-1",
          Link: "#hello",
          Icon: "Laptop",
        },
      ],
    },
    {
      Name: "Menu 3",
      Icon: "PersonPlus",
      Children: [
        {
          Label: "List Item 3-1",
          Link: "#hello",
          Icon: "Bell",
        },
        {
          Label: "List Item 3-2",
          Link: "#test7",
          Icon: "Key",
        },
        {
          Label: "List Item 3-3",
          Link: "#hello",
          Icon: "Lightning",
        },
      ],
    },
    {
      Name: "Menu 4",
      Icon: "Chat",
      Children: [
        {
          Label: "List Item 4-1",
          Link: "#hello",
          Icon: "ChatText",
        },
      ],
    },
    {
      Name: "Test",
      Icon: "XDiamond",
      Children: [
        {
          Label: "Sample",
          Link: "/sample",
          Icon: "LayoutWtf",
        },
        {
          Label: "Form",
          Link: "/sample/form",
          Icon: "Table",
        },
        {
          Label: "Form",
          Link: "/sample/form",
          Icon: "Table",
        },
        {
          Label: "Form",
          Link: "/sample/form",
          Icon: "Table",
        },
        {
          Label: "Form",
          Link: "/sample/form",
          Icon: "Table",
        },
        {
          Label: "Form",
          Link: "/sample/form",
          Icon: "Table",
        },
        {
          Label: "Form",
          Link: "/sample/form",
          Icon: "Table",
        },
        {
          Label: "Form",
          Link: "/sample/form",
          Icon: "Table",
        },
      ],
    },
  ];
  return (
    <div className='App'>
      <AppBar handleShowList={handleShowSideBar}></AppBar>
      <LeftSideBar
        show={isSidebarCollasped}
        handleShow={handleShowSideBar}
        data={nestedListData}
      ></LeftSideBar>
      <div className={`main-body ${isSidebarCollasped ? "Router-OpenList" : "Router-CloseList"}`}>
        <MyRouting></MyRouting>
      </div>
    </div>
  );
}

export default App;
