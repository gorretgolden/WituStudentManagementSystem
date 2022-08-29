import React, { Component } from "react";
import { useLocation, Route, Switch } from "react-router-dom";
import Footer from "components/Footer/Footer";
import Sidebar from "components/Sidebar/Sidebar";
import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";

import student_routes from "student_routes.js";

import sidebarImage from "assets/img/sidebar-3.jpg";

function StudentLayout() {
  const [image, setImage] = React.useState(sidebarImage);
  const [color, setColor] = React.useState("black");
  const [hasImage, setHasImage] = React.useState(true);
  
  const location = useLocation();
 
  const mainPanel = React.useRef(null);
  
  
  const getRoutes = (student_routes) => {
    return student_routes.map((prop, key) => {
      if (prop.layout === "/tutor") {
        return (
          <Route
            path={prop.layout + prop.path}
            render={(props) => <prop.component {...props} />}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainPanel.current.scrollTop = 0;
    if (
      window.innerWidth < 993 &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      var element = document.getElementById("bodyClick");
      element.parentNode.removeChild(element);
    }
  }, [location]);
  return (
    <>
      <div className="wrapper">
        <Sidebar color={color} image={hasImage ? image : ""} routes={student_routes} />
        <div className="main-panel" ref={mainPanel}>
           
          <div className="content">
            <Switch>
              {getRoutes(student_routes)}
            </Switch>
          </div>
          <Footer />
        </div>
      </div>
     
    </>
  );
}

export default StudentLayout;
