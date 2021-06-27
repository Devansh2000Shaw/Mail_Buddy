import React from 'react';
import Navbar from './components/Navbar';
import LandingBody from './components/LandingBody';
import Login from './components/Login';
import Register from './components/Register';
import account from './components/Register';
import About from './components/About';
import EmailBody from './components/EmailBody';
import Footer from './components/Footer';
import RegistrationSuccessful from './components/RegistrationSuccessful';
import './App.css';
import {BrowserRouter, Route , Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
       <div className="mainBody">
         <BrowserRouter>
            <Switch>
              <Route path="/" exact component={LandingBody} />
              <Route path="/About" exact component={About} />
              <Route path="/Register" exact component={Register} />
              <Route path="/Login" exact component={Login} />       
              <Route path="/Login/EmailBody" exact component={EmailBody} /> 
              <Route path="/Login/Register" exact component={account} /> 
              <Route path="/RegistrationSuccessful/LandingBody" exact component={account} /> 
              <Route path="/Register/RegistrationSuccessful" exact component={RegistrationSuccessful} />
              {/* <Route render={()=><div className="main_title_error">404 : Page Not Found</div>} /> */}
            </Switch>
         </BrowserRouter>
       </div>
    );
  }
}

export default App;


