import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './component/Login/Login';
import Home from './component/Home/Home';
import Header from './component/Header/Header';

import Register from './component/Register/Register';
import AuthProvider from './Context/AuthProvider';
import Help from './component/Help/Help';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';
import CreateOrderPage from './component/CreateOrderPage/CreateOrderPage';
import PrivateRoute from './routes/PrivateRoute';
import MyOrderPage from './component/MyOrderPage/MyOrderPage';
import Profile from './component/Profile/Profile';
import PaymentSuccess from './component/PaymentSuccess/PaymentSuccess';



function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/CreateOrderPage/:slotID/:ArrTime/:DepTime/:totalCost/:ParkingNumber/:ParkingZone">
              <CreateOrderPage></CreateOrderPage>
            </PrivateRoute>
            <PrivateRoute path="/MyOrders">
              <MyOrderPage></MyOrderPage>
            </PrivateRoute>
            <PrivateRoute path="/profile">
              <Profile></Profile>
            </PrivateRoute>
            <PrivateRoute path="/success">
              <PaymentSuccess></PaymentSuccess>
            </PrivateRoute>
            <Route path="/help">
              <Help></Help>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
          </Switch>
          <Footer></Footer>
        </AuthProvider>
      </Router>

    </div>
  );
}

export default App;
