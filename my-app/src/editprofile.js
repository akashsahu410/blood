import React,{Component} from 'react'
import {connect} from 'react-redux';
class Editprofile extends React.Component
{
    constructor(props){
        super(props);
        this.state={
          name:"",
          age:"",
          email:localStorage.getItem("email"),
          bloodgroup:"",
          city:"",
          state:"Haryana",
          block:"",
          phone:"",
          nameValid:"",
          ageValid:"",
          blockValid:"*Invalid Block",
          available:"",
          signupValid:"",
          availableValid:"",
          checkblock:"true"
        }
    }
    
    handleChange=(e)=>{
      console.log("e value",e.target.value,e.target.name)
       if(e.target.name == "city" && e.target.value != this.state.city){
         this.setState({checkblock:"false"})
       }
       if(e.target.name == "block" && e.target.value !=this.state.block){
         this.setState({checkblock:"true"})
       }
      this.setState({[e.target.name]:e.target.value})
      console.log("handlechange",this.state)
    }

    componentDidMount=()=>{
      let options={
        method:"POST",
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json"
        },
        body:JSON.stringify({email:this.state.email})
    }
      console.log("options",options)
      fetch("http://localhost:8081/getprofile",options)
      .then(res=>{
        console.log("response",res);
        return res.json();
      })
      .then(data=>{
        this.setState({name:data[0].name,age:data[0].age,bloodgroup:data[0].bloodgroup,city:data[0].city,
          block:data[0].block,available:data[0].available,phone:data[0].phone})
        console.log("data in front",data)
        console.log("state in front",this.state)

      })
      .catch(err=>{
        console.log("error occured",err)
      })
    }
    sendData=(e)=>{
        e.preventDefault();
        this.setState({signupValid:""})
        if(this.state.name != "")
        {
          this.setState({nameValid:""});
          if(this.state.age>=18 && this.state.age<=60 && this.state.age != "")
          {
            this.setState({ageValid:""});
            if(this.state.block !="--Select Block--" && this.state.block != "" && this.state.checkblock == "true")
            {
              this.setState({blockValid:""});
              if(this.state.available != "")
              {
                  this.setState({availableValid:"Profile Updated"})
                  console.log("data after send",this.state)
                  let options={
                      method:"POST",
                      headers:{
                        Accept:"application/json",
                        "Content-Type":"application/json"
                      },
                      body:JSON.stringify(this.state)
                    }
                    console.log("options",options)
                    fetch("http://localhost:8081/editprofile",options)
                    .then(res=>{
                      console.log("response",res);
                      return res.text();
                    })
                    .then(data=>{
                      console.log("data after submit",data)
                    })
                    .catch(err=>{
                      console.log("errorc after submit",err)
                    })
                    this.props.history.push("/profile");

              }
              else{
                this.setState({availableValid:"Select one option"})
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
          <header className="masthead text-center text-white">
            <div className="masthead-content">
              <div className="container" >  
              <center><h1>Edit Profile</h1></center> <br></br>
              <div className="row align-items-center" style={{paddingLeft:"10%",paddingRight:"10%"}}>
                <div className="col-md-12">
                 {/* <div className="col-md-9"> */}
                            <div className="form-group">
                            <input type="text" id="name" className="form-control" onChange={this.handleChange} name="name" defaultValue={this.state.name} required="required" /> 
                            {this.state.name.length === 0 ? <span style={this.props.data.warning}>{this.state.nameValid}</span> : ""}
                            </div>
                            <div className="form-group">
                              <input type="number" id="age" className="form-control" onChange={this.handleChange} name="age" defaultValue={this.state.age} required="required" />
                              {this.state.age.length === 0 || this.state.age <18 || this.state.age>60 ? <span style={this.props.data.warning}>{this.state.ageValid}</span> : ""}
                            </div>
                            <div className="form-group">
                            <select className="form-control" name="bloodgroup" value={this.state.bloodgroup} defaultValue={this.state.bloodgroup} onChange={this.handleChange}>
            
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
                            <select className="form-control" name="city" value={this.state.city} defaultValue={this.state.city} onChange={this.handleChange}>
                            
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
                            </div>

                            <div className="form-group">
                              <select className="form-control" name="block" value={this.state.block} onChange={this.handleChange}>
                                { this.state.city.length>0 ? (this.props.data.block[this.state.city].map(x=>
                                  <option value={x}>{x}</option>
                                )) : ""}
                                
                              </select>
                            {this.state.block == "--Select Block--" || this.state.checkblock =="false" ? <span style={this.props.data.warning}>{this.state.blockValid}</span> : ""}
                            </div>
                            
                            <div className="form-group">
                              <input type="tel" id="phone" className="form-control" maxlength="10" name="phone" onChange={this.handleChange} defaultValue={this.state.phone} required="required" />
                              
                            </div>

                            <div className="form-group">
                            <select className="form-control" name="available" value={this.state.available} defaultValue={this.state.available} onChange={this.handleChange}>
                              <option value="">--Please confirm your availability to donate blood--</option>
                              <option value="Available">Available</option>
                              <option value="Unavailable">Unavailable</option>
                            </select>
                            <span style={this.props.data.warning}>{this.state.availableValid}</span>
                            <br/>
                            </div>
                            
                            <div id="success">
                              <button type="submit" className="btn btn-custom btn-lg" onClick={this.sendData} style={{color:"#047B69",backgroundColor:"white"}}>Update</button>
                            </div>
                </div>
              </div>       
            </div>
          </div>    
        </header>
        </div>
      )}
    }
    const mapStateToProps=state=>{
      console.log("state coming from redux",state)
      return{
        data:state
      }
    }
  
    export default connect(mapStateToProps)(Editprofile)