import React from "react";

const Nav3=(props)=>{
    return(
        <>
        <h1>{props.data}</h1>
        <h1>{props.number}</h1>
        <h1>{props.boolean}</h1>
        <h1>{props.object}</h1>
        </>
    )
}
export default Nav3;