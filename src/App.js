import React, { createContext, useState } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login/Login";
import Order from "./components/DashboardUser/Order/Order";
import AllOrders from "./components/DashboardAdmin/AllOrders/AllOrders";
import AddService from "./components/DashboardAdmin/AddService/AddService";
import MakeAdmin from "./components/DashboardAdmin/MakeAdmin/MakeAdmin";
import Manage from "./components/DashboardAdmin/Manage/Manage";
import Review from "./components/DashboardUser/Review/Review";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import MyOrders from "./components/DashboardUser/MyOrders/MyOrders";
import Dashboard from "./components/DashboardUser/Dashboard/Dashboard";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  console.log(loggedInUser.email);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/services/:id">
            <Order />
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Review />
          </PrivateRoute>
          <PrivateRoute path="/myOrders">
            <MyOrders />
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/admin/allOrders">
            <AllOrders />
          </PrivateRoute>
          <PrivateRoute path="/admin/addService">
            <AddService />
          </PrivateRoute>
          <PrivateRoute path="/admin/makeAdmin">
            <MakeAdmin />
          </PrivateRoute>
          <PrivateRoute path="/admin/manage">
            <Manage />
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
