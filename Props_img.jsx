import React from "react";
import { Component } from "react";
import Nav5 from "./Props/Nav5";
import photo from "./duck.jpg"
class Props_img extends Component{
    render()
    {
        return(
            <>
            {/* <Nav5 data={<img src="https://tse4.mm.bing.net/th?id=OIP.lfJxtNp66emnvGyEmVrmvwHaEK&pid=Api&P=0" alt=""/>}/> */}
            <Nav5 data={<img src={photo} alt=""/>}/>
            </>
        )
    }
}
export default Props_img