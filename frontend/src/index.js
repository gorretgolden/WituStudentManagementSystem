import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import AdminLayout from "layouts/Admin.js";
import LandingPage from "views/LandingPage";
import Login from "views/Login";
import AddUser from "views/users/add_user";
import { Modal } from "react-bootstrap";
import Modals from "views/modal";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Switch>
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />

      <Route exact path="/">
        <LandingPage />
      </Route>

      <Route path="/login">
        <Login />
      </Route>
      <Route path="/users/new">
        <AddUser/>
      </Route>

      <Route path="/modal">
        <Modals/>
      </Route>
    </Switch>
  </BrowserRouter>
);
