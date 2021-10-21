import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './component/Login/Login';
import Home from './component/Home/Home';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Register from './component/Register/Register';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div>
      <Router>
      <AuthProvider>
      <Header></Header>
        <Switch>
          <Route exact  path="/">
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
        </Switch>
        <Footer></Footer>
        </AuthProvider>
      </Router>
     
    </div>
  );
}

export default App;
