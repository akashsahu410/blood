import React from 'react';
import {Link} from 'react-router-dom';
import Logo from './logo'
import Footer from './footer';
class Login extends React.Component{
  constructor(props){
    super(props);
    this.state={
      email:"",
      password:"",
      emailValid:"",
      dataValid:""
    }
  }
  handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
  }
  email_valid=()=> {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(this.state.email) === true){
        return true;
    }
    else{
        return false;
    }
  }
  sendData=(e)=>{
    e.preventDefault();
    if(this.email_valid())
    {
      this.setState({emailValid:""});
      let options={
        method:"POST",
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json"
        },
        body:JSON.stringify(this.state)
      }
      fetch("http://localhost:8081/login",options)
      .then(res=>{
        console.log("response",res)
        return res.json();
      })
      .then(data=>{
        console.log("data fetched",data,data.email,data.password)
        if((data.email === this.state.email) && (data.password === this.state.password)){
          this.setState({dataValid:"Login Successful"})
          localStorage.setItem("email",this.state.email)
          console.log("localstorage email",localStorage.getItem("email"))
          this.props.history.push(`/profile`)
        }
        else{
          this.setState({dataValid:"Login Unsuccessful"})
        }
      })
      .catch(err=>{
        this.setState({dataValid:"Login Unsuccessful"})
        console.log("error in fetch all",err)
      })
    }
    else{
      this.setState({emailValid:"Invalid Email"})
    }
  }
  render(){
    const warning={
      float:"left",
      paddingTop:5,
      paddingBottom:5,
      color:"white"
  }
    return (
      <div>
        
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
          <div className="container textcolor">
          <Logo/>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to="home"><a className="nav-link" href="#">Home</a></Link>
                </li>
                <li className="nav-item">
                  <Link to="signup"><a className="nav-link" href="#">Signup</a></Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <header className="masthead text-center text-white">
            <div className="container">  
            <center><h1>Login</h1></center> <br></br>
            <div className="row align-items-center"  style={{paddingLeft:"10%",paddingRight:"10%"}}>
              <div className="col-md-12">
               
                          <div className="form-group">
                            <input type="text" id="email" className="form-control" name="email" onChange={this.handleChange} placeholder="Email" required="required" />
                            {this.state.email.length === 0 ? <span style={warning}>{this.state.emailValid}</span> : ""}
                          </div>
                          <div className="form-group">
                            <input type="password" id="password" className="form-control" name="password" onChange={this.handleChange} placeholder="Password" required="required" />
                            <span style={warning}>{this.state.dataValid}</span><br/>
                          </div>
                          <div id="success">
                            <button type="submit" className="btn btn-custom btn-lg" style={{color:"#047B69",backgroundColor:"white"}} onClick={this.sendData}>Login</button>
                          </div>
                          <br/> 
                              <div className="section-title text-center center">
                              <br/><Link to="/forgot"><a href="#" style={{color:"#FF0DA4"}}>Forgot Password?</a></Link>
                                <p style={{color: 'white'}}>I do not have any account yet.<br />
                                  <Link to="/signup"><a style={{color:"#FF0DA4"}}>Create My Account Now !</a></Link>
                                </p>
                              </div>
              {/* </div>  */}
          </div>
          </div>       
          </div>
              
        </header>
        <Footer/>
      </div>
    );
  }
}
  export default Login;