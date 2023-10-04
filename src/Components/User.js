import { useEffect, useState,React } from 'react'; 
import { useParams } from 'react-router-dom';


function User() {
    const [count, setcounter] = useState(0)
    const [dat,data] = useState(0)
useEffect (()=>{
    console.log("mount");
})
    function clickbutton(){
        setcounter (count +1)
    }
    function clickbutton2(){
        setcounter (count -1)
    }
    function clickbutton3(){
        data ("seeta");
    }
     const params = useParams();
     const {name} = params
  return (
<>
   <div>This is {name}  page</div>

   <h1>This is useState{count}</h1>
   <h1>This is useState{dat}</h1>
   <button onClick={clickbutton}>ClickMe</button>
   <button onClick={clickbutton2}>ClickMe</button>
   <button onClick={clickbutton3}>Clickhere</button>
 </>

  );
}
export default User;