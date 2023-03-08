import React from "react";
import { Component } from "react";

class Nav4 extends Component{
    render()
    {
        return(
            <>
            <h1>{this.props.data.username}</h1>
            <h1>{this.props.data.password}</h1>
            </>
        )
            
        
    }
}
export default Nav4;