import React from "react";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

// reactstrap components
import { Route, Switch, Redirect } from "react-router-dom";

// core components
import DashboardNavbar from "../components/Navbars/DashboardNavbar.jsx";
import DashboardFooter from "../components/Footers/DashboardFooter.jsx";
import Sidebar from "../components/Sidebar/Sidebar.jsx";

import routes from "../patient-routes.js";

var ps;

class Dashboard extends React.Component {

  mainPanel = React.createRef();
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.mainPanel.current);
      document.body.classList.toggle("perfect-scrollbar-on");
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
      document.body.classList.toggle("perfect-scrollbar-on");
    }
  }
  componentDidUpdate(e) {
    if (e.history.action === "PUSH") {
      this.mainPanel.current.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
    }
  }
  render() {
    return (
      <div className="wrapper">
        <Sidebar
          {...this.props}
          routes={routes}
          backgroundColor="blue"
        />
        <div className="main-panel" ref={this.mainPanel}>
          <DashboardNavbar {...this.props} />
          <Switch>
            {routes.map((prop, key) => {
              return (
                <Route
                  path={prop.layout + prop.path}
                  component={prop.component}
                  key={key}
                />
              );
            })}
            <Redirect from="/patient" to="/patient/profile/:id" />
          </Switch>
          <DashboardFooter fluid />
        </div>
      </div>
    );
  }
}

export default Dashboard;