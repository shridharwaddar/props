import React from "react";
import { Component } from "react";
import Nav4 from "./Props/Nav4";

class Props_object extends Component{
    render()
    {
        return(
            <>
            <Nav4 data={{ username:"shridhar",password:143}}/>
            </>
        )
    }
}export default Props_object;