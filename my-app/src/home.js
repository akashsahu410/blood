import React from 'react'
import Footer from './footer'
import {Link} from 'react-router-dom';
import Logo from './logo'
class Home extends React.Component
{
    constructor(props){
        super(props);
        this.state={
          
        }
    }
    logout=()=>{
      localStorage.removeItem("email")
    }
    render(){
      return (
        <div>
          {console.log(localStorage.getItem("email"))}
          <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
            <div className="container textcolor">
            <Logo/>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                {localStorage.getItem("email") ? 
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link to="/profile"><a className="nav-link" href="#">Profile</a></Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/home"><a className="nav-link" onClick={this.logout}>Log Out</a></Link>
                    </li> 
                  </ul> :
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link to="/signup"><a className="nav-link" href="#">Signup</a></Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/login"><a className="nav-link" href="#">Log In</a></Link>
                    </li>
                  </ul> }
              </div>
            </div>
          </nav>
          <header className="masthead text-center text-white">
            <div className="masthead-content" style={{paddingTop:70,paddingBottom:100}}>
              <div className="container">
                <h1 className="masthead-heading mb-0">Anybody can give blood</h1>
                <h2 className="masthead-subheading mb-0">The gift of blood is the gift of life</h2>
                <Link to="/learn"><a href="#" className="btn btn-primary btn-xl rounded-pill mt-5">Learn More</a></Link>
              </div>
            </div>
            <div className="bg-circle-1 bg-circle" />
            <div className="bg-circle-2 bg-circle" />
            <div className="bg-circle-3 bg-circle" />
            <div className="bg-circle-4 bg-circle" />
          </header>
          <section>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 order-lg-2">
                  <div className="p-5">
                    <img className="img-fluid" src="img/01.jpg" style={{borderRadius:30,borderColor:"black",borderWidth:1,borderStyle:"solid"}} alt />
                  </div>
                </div>
                <div className="col-lg-6 order-lg-1">
                  <div className="p-5">
                    <h2 className="display-4">Give someone a reason to Smile</h2>
                    <p>Every of us has his own reason to give blood. No matter what your purpose is, 
                      the only thing that does matter is the number of lives saved.The Blood Donor of today may be recipient of tomorrow.
                      Blood donation is the real act of humanity.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="p-5">
                    <img className="img-fluid" src="img/02.jpg" style={{borderRadius:30}} alt />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="p-5">
                    <h2 className="display-4">We salute you!</h2>
                    <p>The blood you donate gives someone another chance at life. One day that someone may be a close relative, 
                      a friend, a loved one or even you.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 order-lg-2">
                  <div className="p-5">
                    <img className="img-fluid rounded-circle" src="img/03.jpg" alt />
                  </div>
                </div>
                <div className="col-lg-6 order-lg-1">
                  <div className="p-5">
                    <h2 className="display-4">Let there be rock!</h2>
                    <p><label style={{backgroundColor:"red",color:"white"}}>&nbsp;Important&nbsp;</label> All Voluntary Donors are warned of likely misuse of blood donated by them at the hospital with or without the knowledge of the hospital management. At some places the hospital staff have taken the blood and sold it to others for a price. As a responsible citizen/voluntary blood donor, we request you to keep a watch on such people and hospitals. Donors must inform higher authorities of hospital/Deputy Commissioner in case of any doubt.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Footer */}
          <Footer/>
        </div>
      );
    }
  }
  export default Home;