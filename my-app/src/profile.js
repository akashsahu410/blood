import React,{Component} from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Logo from './logo'
class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bloodgroup:"A+",
            state:"Haryana",
            city:"Ambala",
            block:"",
            blockValid:"",
            result:""
        }
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
        }
    logout=()=>{
        localStorage.removeItem("email")
    }
    sendData = (e) => {
        e.preventDefault();
        if(this.state.block != "")
          {
            this.setState({blockValid:""});
            let options = {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                 },
                body: JSON.stringify({state:this.state.state,city:this.state.city,block:this.state.block,bloodgroup:this.state.bloodgroup})
            }
            console.log("options", options)
            fetch("http://localhost:8081/profile", options)
            .then(res => {
                console.log("response", res);
                return res.json();
            })
            .then(data => {
                console.log("data return in then react->",data)
                this.setState({result:data})
                console.log("result set",this.state.result)
            })
            .catch(err => {
                console.log("error in fetch call",err)
            })
        }
        else{
            this.setState({blockValid:"*Invalid Block"})
        }
    }
    render() {
        return (
            <div>
            <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
            <div className="container textcolor">
             <Logo/>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/home"><a className="nav-link" href="#">Home</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/editprofile"><a className="nav-link" href="#">Edit Profile</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login"><a className="nav-link" href="#" onClick={this.logout}>Log Out</a></Link>
                    </li>
                </ul>
              </div>
            </div>
          </nav>
                <header className="masthead text-center text-white">
                    <div className="masthead-content" style={{ paddingBottom: 50 }}>
                        <div className="container">
                            <h3>Search for Blood Donors</h3>
                            <div className="col-md-12" style={{paddingLeft:"10%",paddingRight:"10%"}}>
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

                                    <select className="form-control" name="block" value={this.props.data.block[this.state.state]} onChange={this.handleChange}>
                                        {this.props.data.block[this.state.city].map(x =>
                                            <option value={x}>{x}</option>
                                        )}

                                    </select>
                                    {this.state.block.length === 0 ? <span style={this.props.data.warning}>{this.state.blockValid}</span> : ""}
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
                            </div>
                            <div id="success">
                              <button type="submit" className="btn btn-custom btn-lg" onClick={this.sendData} style={{color:"#047B69",backgroundColor:"white"}}>Find</button>
                            </div>
                        </div><br/><hr style={{backgroundColor:"white"}}/>
                       
                        <table  class="table table-borderless">
                            <thead>
                                <th>Name</th>
                                <th>Availability</th>
                                <th>Mobile No.</th>
                                <th>Email</th>
                            </thead>
                            <tbody>
                            { this.state.result.length!=0 ? (this.state.result.map(x=>
                            <tr>
                                <td>{x.name}</td>
                                <td>{x.available}</td>
                                <td>{x.phone}</td>
                                <td>{x.email}</td>
                            </tr>
                            )) : ""}
                            </tbody>
                        </table>
                        
                    </div>
                </div>
                    <div className="bg-circle-1 bg-circle" />
                    <div className="bg-circle-2 bg-circle" />
                    <div className="bg-circle-3 bg-circle" />
                    <div className="bg-circle-4 bg-circle" />
                </header>
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

  export default connect(mapStateToProps)(Profile)