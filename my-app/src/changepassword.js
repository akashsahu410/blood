import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import Logo from './logo'
import {connect} from 'react-redux'
import Footer from './footer';
class Changepassword extends React.Component{
    constructor(props){
        super(props);
        this.state={
            password:"",
            confirmpassword:"",
            passwordValid:"",
            confirmpasswordValid:"",
            changeValid:""
        }
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
      }

    password_valid=()=>{
        const reg=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
        if(reg.test(this.state.password) === true)
          return true;
        else
          return false;
      }
      sendData=(e)=>{
        e.preventDefault();
        console.log("data is",this.state)
        if(this.password_valid() == true){
            this.setState({passwordValid:""})
            if(this.state.password === this.state.confirmpassword){
                let options={
                    method:"POST",
                    headers:{
                      Accept:"application/json",
                      "Content-Type":"application/json"
                    },
                    body:JSON.stringify({password:this.state.password})
                }
                console.log("options",options)
                fetch("http://localhost:8081/forgot/change",options)
                .then(res=>{
                  console.log("response",res);
                  return res.text();
                })
                .then(data=>{
                  console.log("data return in then react->",data)
                  
                  if(data === "Password changed Successfully")
                  {
                    this.setState({changeValid:data})
                      this.props.history.push('/login')
                  }
                  else{
                    this.setState({changeValid:"*Click on link that has been send to your e-mail Id"})
                  }
                })
                .catch(err=>{
                    console.log("error",err)
                })
            }
            else{
                this.setState({confirmpasswordValid:"*Password doesn't match"})
            }
            
        }
        else{
            this.setState({passwordValid:"*At least 6 characters,at least one number, one lowercase and one uppercase letter"})
        }
      }
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
          <div className="container textcolor">
          <Logo/>
          </div>
        </nav>
        <header className="masthead text-center text-white" style={{paddingBottom:80,paddingTop:200}}>
            <div className="container">  
            <center><h1>Change Password</h1></center> <br></br>
            <div className="row align-items-center"  style={{paddingLeft:"10%",paddingRight:"10%"}}>
              <div className="col-md-12">
               
                          
                          <div className="form-group">
                            <input type="password" id="password" className="form-control" name="password" onChange={this.handleChange} placeholder="Password" required="required" />
                            {this.state.password.length === 0 || this.password_valid()=== false ? <span style={this.props.data.warning}>{this.state.passwordValid}</span> : ""}
                          </div> 

                          <div className="form-group">
                            <input type="password" id="password" className="form-control" name="confirmpassword" onChange={this.handleChange} placeholder=" Confirm Password" required="required" />
                            {this.state.password.length === 0 || this.state.password!=this.state.confirmpassword ? <span style={this.props.data.warning}>{this.state.confirmpasswordValid}</span> : ""}
                            <span style={this.props.data.warning}>{this.state.changeValid}</span>
                          <br/>
                          </div>
                          

                          <div id="success">
                            <button type="submit" className="btn btn-custom btn-lg" style={{color:"#047B69",backgroundColor:"white"}} onClick={this.sendData}>Submit</button>
                          </div>
                          <br/> 
                          
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

  export default connect(mapStateToProps)(Changepassword)