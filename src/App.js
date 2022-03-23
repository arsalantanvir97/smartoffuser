import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./Screens/Login";
import Home from "./Screens/Home";
import Home2 from "./Screens/Home2";
import SignUp from "./Screens/SignUp";
import SignUp2 from "./Screens/SignUp2";
import Dashboard from "./Screens/Dashboard";
import ForgotPassword from "./Screens/ForgotPassword";
import VerificationCOde from "./Screens/VerificationCOde";
import ResetPassword from "./Screens/ResetPassword";
import Profile from "./Screens/Profile";
import LocatePrinter from "./Screens/LocatePrinter";
import Packages from "./Screens/Packages";
import PackageDetails from "./Screens/PackageDetails";
import ContactUs from "./Screens/ContactUs";
import PrintingLogs from "./Screens/PrintingLogs";
import PrintingLogsView from "./Screens/PrintingLogsView";
import MyDocument from "./Screens/MyDocument";
import MyDocumentView from "./Screens/MyDocumentView";
import Notification from "./Screens/Notification";
import Footer from "./components/Footer";
import ChangePassword from "./Screens/ChangePassword";

const App = () => {
  return (
    <Router basename="/">
      <Route path="/" component={Home} exact />
      <Route path="/Login" component={Login} exact />
      <Route path="/SignUp" component={SignUp} exact />
      <Route path="/SignUp2" component={SignUp2} exact />
      <Route path="/forgotpassword" component={ForgotPassword} exact />
      <Route
        path="/verificationcode:email"
        component={VerificationCOde}
        exact
      />
      <Route path="/resetPassword" component={ResetPassword} exact />

      <PrivateRoute exact path="/Home" component={Home2} />
      <PrivateRoute exact path="/ChangePassword" component={ChangePassword} />

      <PrivateRoute exact path="/Dashboard" component={Dashboard} />
      <PrivateRoute exact path="/Profile" component={Profile} />
      <PrivateRoute exact path="/LocatePrinter" component={LocatePrinter} />
      <PrivateRoute exact path="/Packages" component={Packages} />
      <PrivateRoute
        exact
        path="/PackageDetails:id"
        component={PackageDetails}
      />
      <PrivateRoute
        exact
        path="/MyDocumentView:id"
        component={MyDocumentView}
      />
      <PrivateRoute exact path="/ContactUs" component={ContactUs} />
      <PrivateRoute exact path="/PrintingLogs" component={PrintingLogs} />
      <PrivateRoute exact path="/Notification" component={Notification} />
      <PrivateRoute
        exact
        path="/PrintingLogsView:id"
        component={PrintingLogsView}
      />
      <PrivateRoute exact path="/MyDocument" component={MyDocument} />
      <Footer />
    </Router>
  );
};

export default App;
