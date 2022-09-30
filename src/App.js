import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Loaderr from "./components/Loaderr";
import PrivateRoute from "./components/PrivateRoute";
import Footer from "./components/Footer";

const Login = lazy(() => import("./Screens/Login"));
const Home = lazy(() => import("./Screens/Home"));
const Home2 = lazy(() => import("./Screens/Home2"));
const SignUp = lazy(() => import("./Screens/SignUp"));
const SignUp2 = lazy(() => import("./Screens/SignUp2"));
const Dashboard = lazy(() => import("./Screens/Dashboard"));
const ForgotPassword = lazy(() => import("./Screens/ForgotPassword"));
const VerificationCOde = lazy(() => import("./Screens/VerificationCOde"));
const ResetPassword = lazy(() => import("./Screens/ResetPassword"));
const Profile = lazy(() => import("./Screens/Profile"));
const LocatePrinter = lazy(() => import("./Screens/LocatePrinter"));
const Packages = lazy(() => import("./Screens/Packages"));
const PackageDetails = lazy(() => import("./Screens/PackageDetails"));
const ContactUs = lazy(() => import("./Screens/ContactUs"));
const PrintingLogs = lazy(() => import("./Screens/PrintingLogs"));
const PrintingLogsView = lazy(() => import("./Screens/PrintingLogsView"));
const MyDocument = lazy(() => import("./Screens/MyDocument"));
const MyDocumentView = lazy(() => import("./Screens/MyDocumentView"));
const Notification = lazy(() => import("./Screens/Notification"));
const ChangePassword = lazy(() => import("./Screens/ChangePassword"));

const App = () => {
  return (
    <Suspense fallback={<Loaderr />}>

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
      <Route exact path="/ContactUs" component={ContactUs} />
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
    </Suspense>

  );
};

export default App;
