import React, { useContext } from "react";
import { data,data1 } from "../App";

function Child3(){
    const name = useContext(data);
    const gender =useContext(data1);
    return(
        <>
        <h2>Child3</h2>
        <h1>hii my name is {name} and my gender is {gender}</h1>
        </>
    );
}
export default Child3;