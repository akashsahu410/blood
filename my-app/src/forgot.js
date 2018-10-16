import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import Logo from './logo'
import {connect} from 'react-redux'
import Footer from './footer'
class Forgot extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:"",
            emailValid:"",
            emailSent:""
        }
    }

    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
      }

    email_valid=()=> {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(this.state.email) === true)
              return true;
        else
             return false;
      }
      sendData=(e)=>{
        e.preventDefault();
        console.log("data is",this.state)
        if(this.email_valid()=== true)
        {
            this.setState({emailValid:""})
            let options={
                method:"POST",
                headers:{
                  Accept:"application/json",
                  "Content-Type":"application/json"
                },
                body:JSON.stringify({email:this.state.email})
            }
            console.log("options",options)
            fetch("http://localhost:8081/forgot/password",options)
            .then(res=>{
              console.log("response",res);
              return res.text();
            })
            .then(data=>{
              console.log("data return in then react->",data)
              if(data === "Email Sent"){
                alert("A mail has been send to your e-mail Id for Reset Password Link")
              }
              else if(data === "Not Found"){
                alert("Email id not found")
              }
            })
            .catch(err=>{
                console.log("error",err)
            })
        }
        else{
            this.setState({emailValid:"*Invalid Email"})
        }
      }
    render(){
        return(
        <div>
          {/* <div style={close_btn}>
            <div className="pop_hdr" style={{color:"green",paddingLeft:10,paddingRight:10}}>A mail has been send to your e-mail Id for Reset Password 
            Link<img src="img/clos.png" alt id="clos_pop" /></div>
            <div className="man_contnt">
              <span>Please Check Your Mail Box!</span>
              
              <Link to="/forgot"><input type="submit" defaultValue="Ok"/></Link>
            </div> 
            </div> */}
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
        <header className="masthead text-center text-white" style={{paddingBottom:80,paddingTop:200}}>
          <div className="container"> 
            <center><h1>Forgot Password</h1></center> <br></br>
            <div className="row align-items-center"  style={{paddingLeft:"10%",paddingRight:"10%"}}>
              <div className="col-md-12">
               
                          <div className="form-group">
                            <input type="text" id="email" className="form-control" name="email" onChange={this.handleChange} placeholder="Email" required="required" />
                            {this.state.email.length === 0 ||this.email_valid() == false? <span style={this.props.data.warning}>{this.state.emailValid}</span> : ""}
                          <br/>
                          </div>
                          <div id="success">
                            <button type="submit" className="btn btn-custom btn-lg" style={{color:"#047B69",backgroundColor:"white"}} onClick={this.sendData}>Submit</button>
                          </div>
                          <br/> 
                          <div className="section-title text-center center">
                              <p><br />
                               <Link to="/login"><a style={{color:"#FF0DA4"}}>Login My Account !</a></Link>
                              </p>
                            </div>
              {/* </div>  */}
          </div>
          </div>       
          </div>
              
        </header>
        <Footer/>
            </div>
        )
    }
}
const mapStateToProps=state=>{
    console.log("state coming from redux",state)
    return{
      data:state
    }
  }

  export default connect(mapStateToProps)(Forgot)