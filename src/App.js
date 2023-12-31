import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Person from "./Components/Person";
import Man from "./Components/Man";
import Parent from "./Components/Parent";
import WelcomeMessage from './Components/Welcomemessage';
import Blogpost from './Components/Blogpost';
import LoginForm from './Components/LoginForm';
import AgeCheck from './Components/AgeCheck';
import StudentList from './Components/StudentList';
import NumberList from './Components/NumberList';
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import { Link,useNavigate } from 'react-router-dom';
import AboutMain from './Components/AboutMain';
import AboutTeam from './Components/AboutTeam';
import Profile from './Components/Profile';
import Child1 from './Components/Child1';
import { createContext, useState } from 'react';
import Counter from './Components/Counter';
import AddUser from './Components/AddUser';
import UserList from "./Components/UserList"
import { AppContext } from './context';
import Login from './Components/Login';
import Protuctive from './Components/Protuctive';
import User from './Components/User';

//Add cart practice




const data = createContext();
//New Comments
const data1 = createContext();

const namedata = createContext();

function App() {
//add cart practice 
const [ users, setUsers ] = useState([]);
	
const dispatchUserEvent = (actionType, payload) => {
  switch (actionType) {
    case 'ADD_USER':
      setUsers([ ...users, payload.newUser ]);
      return;
    case 'REMOVE_USER':
      setUsers(users.filter(user => user.id !== payload.userId));
      return;
    default:
      return;
  }
};








  const name = "harsh"
  const gender = "male"

  const name2 = "harsh Dubey"

  
  const navigate = useNavigate()
  function goToAbout(){
    navigate("./about")
  }
  return (
 
	<div className="App">
    	


     <>
     <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link to="/Home" class="nav-link active">Home</Link>
        </li>
        <li class="nav-item">
        <Link to="/About" class="nav-link active">About</Link>
        </li>
<li class="nav-item">
<Link to="/Contact" class="nav-link active">Contact</Link>
        </li>
        
<li class="nav-item">
<Link to="/login" class="nav-link active">Login</Link>
        </li>
      </ul>
     
    </div>
  </div>
</nav>

   </>



   {/* //add cart */}
   <AppContext.Provider value={{ users, dispatchUserEvent }}>
				<AddUser />
				<UserList />
			</AppContext.Provider>

<User />
   <Counter />
   <>
<data.Provider value={name}>
  <data1.Provider value={gender}>
    <namedata.Provider value={name2}>
    <Child1 />
    </namedata.Provider>
  </data1.Provider>
</data.Provider>
</>

 <Routes>
  <Route path='/home' element={<Protuctive Component={Home} />} />
  <Route path='/contact' element={<Contact />} />
  <Route path='/about' element={<About />} />
  <Route path='/main' element={<AboutMain />} />
  <Route path='/aboutteam' element={<AboutTeam />} />
  <Route path='/login' element={<Login />} />
 </Routes>
<li><Link to="/user/Harsh">Harsh</Link></li>
<li><Link to="/user/Shivam">SHivam</Link></li>


<button onClick={goToAbout}>About</button>

<Profile></Profile> 
    <WelcomeMessage></WelcomeMessage>
    <div>
      <WelcomeMessage username="Harsh" />
    </div>
    <StudentList></StudentList>
    <NumberList></NumberList>
    <h2>hello harsh</h2>
    <Person></Person>
    <Man></Man>
    <Parent></Parent>
    <Blogpost />
    <LoginForm></LoginForm>
    <AgeCheck></AgeCheck>


    

  </div>
  );
}

export default App;
export {data , data1};
export {namedata};