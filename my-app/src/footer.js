import React from 'react'
class Footer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
            <footer className="py-5" style={{backgroundColor:"#047461",color:"white",paddingTop:"20",paddingBottom:"20 !important"}}>
                <div className="container" >
                    <p className="m-0 text-center text-white small">&copy; Copyright 2018. All Rights Reserved.</p>
                </div>
          </footer>
            </div>
        )
    }
}
export default Footer;