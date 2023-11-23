import React,{useContext, useState} from "react";
import { AppContext } from "../context";

function Addcart(){
const {dispatchUserEvent} = useContext(AppContext);
const [name,setname] = useState('');
const [age,setage] = useState('');
const [bio,setbio] = useState('');

const handleAddUser =() => {
    const user = {id: Math.random(),name,age,bio};
    dispatchUserEvent('Add_cart', {newUser: user});

};

return(

    <div>
        <h3>Add New Cart</h3>
        <input type="text" value={name} onChange={e => {setname(e.target.value)}} placeholder="name" />
        <br />
        <input type="text" value={age} onChange={e => {setage(e.target.value)}} placeholder="age" />
        <br />
        <input type="text" value={bio} onChange={e => {setbio(e.target.value)}} placeholder="Bio" />
        <br />
        <button onClick={handleAddUser}>Add User</button>
    </div>

);

}
export default Addcart;