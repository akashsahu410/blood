import React from 'react';
import {Link} from 'react-router-dom';
class Logo extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <Link to="/home"><a className="navbar-brand" href="#">BloodDonation</a>
                <img src="img/logo.png" height="40" width="30"/></Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
            </div>
        )
    }
}
export default Logo;