import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import Home from './home'
import Signup from './signup'
import Login from './login'
import Editprofile from './editprofile'
import Profile from './profile'
import Learn from './learn'
import Forgot from './forgot'
import Changepassword from './changepassword';


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      localStorage.getItem("email") !=null
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  )
  //to check for login and signup 
  const Private = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      localStorage.getItem("email") !=null
        ? <Redirect to='/profile' />
        : <Component {...props} />
    )} />
  )
class Routes extends React.Component{
    constructor(props){
        super(props);
    }
     
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/home" component={Home}/>
                    <PrivateRoute path="/profile" component={Profile}/> 
                    <Private path="/signup" component={Signup}/>
                    <Private path="/login" component={Login}/>
                    <PrivateRoute path="/editprofile" component={Editprofile}/>
                    <Route path="/learn" component={Learn}/>
                    <Private path="/forgot" component={Forgot}/>
                    <Private path="/reset" component={Changepassword}/>
                    
                    
                    </Switch>
            </div>
        )
    }
}
export default Routes;
