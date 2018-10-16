import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Footer from './footer'
import Logo from './logo'

class Signup extends React.Component
{
    constructor(props){
        super(props);
        this.state={
          name:"",
          age:"",
          gender:"Male",
          bloodgroup:"A+",
          state:"Haryana",
          city:"Ambala",
          block:"",
          email:"",
          password:"",
          phone:"",
          nameValid:"",
          ageValid:"",
          emailValid:"",
          blockValid:"",
          available:"",
          passwordValid:"",
          signupValid:"",
          availableValid:""
        } 
    }
   
    email_valid=()=> {
      const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (reg.test(this.state.email) === true)
            return true;
      else
           return false;
    }
    password_valid=()=>{
      const reg=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
      if(reg.test(this.state.password) === true)
        return true;
      else
        return false;
    }

    handleChange=(e)=>{
      this.setState({[e.target.name]:e.target.value})
    }
    
    sendData=(e)=>{
      e.preventDefault();
      console.log("data is",this.state)
      this.setState({signupValid:""})
      if(this.state.name != "")
      {
        this.setState({nameValid:""});
        if(this.state.age>=18 && this.state.age<=60 && this.state.age != "")
        {
          this.setState({ageValid:""});
          if(this.state.block != "")
          {
            this.setState({blockValid:""});
            if(this.email_valid()=== true)
            {
              this.setState({emailValid:""});
              if(this.state.password != "" && this.password_valid())
              {
                this.setState({passwordValid:""});
                if(this.state.available != "")
                {
                  this.setState({availableValid:""})
                    let options={
                        method:"POST",
                        headers:{
                          Accept:"application/json",
                          "Content-Type":"application/json"
                        },
                        body:JSON.stringify(this.state)
                    }
                    console.log("options",options)
                    fetch("http://localhost:8081/signup",options)
                    .then(res=>{
                      console.log("response",res);
                      return res.text();
                    })
                    .then(data=>{
                      console.log("data return in then react->",data)
                      if(data === "Registered Successfully"){
                        this.setState({signupValid:data})
                        this.props.history.push("/login");
                      }
                      else
                      {
                        this.setState({signupValid:data})
                      }
                    })
                    .catch(err=>{
                    console.log("error in fetch call",err)
                    })
                  }
                  else{
                    this.setState({availableValid:"Select one option"})
                  }
              }
              else{
                this.setState({passwordValid:"*At least 6 characters,at least one number, one lowercase and one uppercase letter"})
              }
            }
            else{
              this.setState({emailValid:"*Invalid Email"})
            }
          }
          else{
            this.setState({blockValid:"*Invalid Block"})
          }
        }
        else{
          this.setState({ageValid:"*Invalid Age"})
        }
      }
      else{
        this.setState({nameValid:"*Cannot be Empty"})
      }
    }
    render(){
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
                    <Link to="/login"><a className="nav-link" href="#">Log In</a></Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <header className="masthead text-center text-white">
              <div className="container">  
              <center><h1>Signup</h1></center> <br></br>
              <div className="row align-items-center" style={{paddingLeft:"10%",paddingRight:"10%"}}>
                <div className="col-md-12">
                 {/* <div className="col-md-9"> */}
                            <div className="form-group">
                            <input type="text" id="name" className="form-control" onChange={this.handleChange} name="name" placeholder="Name" required="required" /> 
                            {this.state.name.length === 0 ? <span style={this.props.data.warning}>{this.state.nameValid}</span> : ""}
                            </div>
                            <div className="form-group">
                              <input type="number" id="age" className="form-control" onChange={this.handleChange} name="age" placeholder="Age" required="required" />
                              {this.state.age.length === 0 || this.state.age <18 || this.state.age>60 ? <span style={this.props.data.warning}>{this.state.ageValid}</span> : ""}
                            </div>
                            <div className="form-group">
                            <select className="form-control" name="gender" value={this.state.gender} onChange={this.handleChange}>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                              <p className="help-block text-danger" />
                              </select>
                            </div>
                            <div className="form-group">
                            <select className="form-control" name="bloodgroup" value={this.state.bloodgroup} onChange={this.handleChange}>
            
                                <option value="A+">A+</option>
                                <option value="O+">O+</option>
                                <option value="B+">B+</option>
                                <option value="AB+">AB+</option>
                                <option value="A-">A-</option>
                                <option value="O-">O-</option>
                                <option value="B-">B-</option>
                                <option value="AB-">AB-</option>
                            </select>
                              <p className="help-block text-danger" />
                            </div>
                            <div className="form-group">
                              <input type="text" id="state" className="form-control" name="state" onChange={this.handleChange} value="Haryana" required="required" />
                              <p className="help-block text-danger" />
                            </div>
                            <div className="form-group">
                            <select className="form-control" name="city" value={this.state.city} onChange={this.handleChange}>
                            
                                <option value="Ambala">Ambala</option>
                                <option value="Bhiwani">Bhiwani</option>
                                <option value="Charkhi Dadri">Charkhi Dadri</option>
                                <option value="Faridabad">Faridabad</option>
                                <option value="Fatehabad">Fatehabad</option>
                                <option value="Gurugram">Gurugram</option>
                                <option value="Hisar">Hisar</option>
                                <option value="Jhajjar">Jhajjar</option>
                                <option value="Jind">Jind</option>
                                <option value="Kaithal">Kaithal</option>
                                <option value="Karnal">Karnal</option>
                                <option value="Kurukshetra">Kurukshetra</option>
                                <option value="Mahendragarh">Mahendragarh</option>
                                <option value="Mewat">Mewat</option>
                                <option value="Palwal">Palwal</option>
                                <option value="Panchkula">Panchkula</option>
                                <option value="Panipat">Panipat</option>
                                <option value="Rewari">Rewari</option>
                                <option value="Rohtak">Rohtak</option>
                                <option value="Sirsa">Sirsa</option>
                                <option value="Sonipat">Sonipat</option>
                                <option value="Yamunanagar">Yamunanagar</option>

                            </select>
                              <p className="help-block text-danger" />
                            </div>
                            <div className="form-group">
                            {console.log("this.props.data",this.props.data[0])}
                            <select className="form-control" name="block" value={this.props.data.block[this.state.state]} onChange={this.handleChange}>
                                {this.props.data.block[this.state.city].map(x=>
                                  <option value={x}>{x}</option>
                                )}
                                
                            </select>
                            {this.state.block.length === 0 ?<span style={this.props.data.warning}>{this.state.blockValid}</span> : "" }
                            </div>
                            <div className="form-group">
                              <input type="text" id="email" className="form-control" name="email" onChange={this.handleChange} placeholder="Email" required="required" />
                              {this.state.email.length === 0 || this.email_valid() == false ? <span style={this.props.data.warning}>{this.state.emailValid}</span> : ""}
                            </div>
                            <div className="form-group">
                              <input type="password" id="password" className="form-control" name="password" onChange={this.handleChange} placeholder="Password" required="required" />
                              {this.state.password.length === 0 || this.password_valid()=== false ? <span style={this.props.data.warning}>{this.state.passwordValid}</span> : ""}
                            </div>
                            
                            <div className="form-group">
                              <input type="tel" id="phone" className="form-control" maxlength="10" name="phone" onChange={this.handleChange} placeholder="Mobile No.(Optional)" required="required" />
                              {this.state.email.length >0 && this.state.emailValid === "" && this.email_valid() ? <span style={this.props.data.warning}>{this.state.signupValid}</span> : ""}
                            </div>

                            <div className="form-group">
                            <select className="form-control" name="available" value={this.state.available} onChange={this.handleChange}>
                              <option value="">--Please confirm your availability to donate blood--</option>
                              <option value="Available">Available</option>
                              <option value="Unavailable">Unavailable</option>
                            </select>
                            {this.state.available == "" ? <span style={this.props.data.warning}>{this.state.availableValid}</span> : ""}
                            <br/>
                            </div>
                            
                            <div id="success">
                              <button type="submit" className="btn btn-custom btn-lg" onClick={this.sendData} style={{color:"#047B69",backgroundColor:"white"}}>Signup</button>
                            </div>
                            <div className="section-title text-center center">
                              <p>I already have an account.<br />
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
      );
    }
  }
  const mapStateToProps=state=>{
    console.log("state coming from redux",state)
    return{
      data:state
    }
  }

  export default connect(mapStateToProps)(Signup)
  