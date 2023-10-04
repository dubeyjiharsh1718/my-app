import React from "react";
import Child3 from "./Child3";
import { namedata } from "../App";

function Child2({name}){
    return( 
<>
<namedata.Consumer>
{
    (name2)=>{
        return(
            <h1>my name in conteax API is {name2}</h1>
        )
    }
}
</namedata.Consumer>
        <Child3 name={name} />
        </>
    );
}
export default Child2;