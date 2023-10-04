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
 import User from "./Components/User"
import Profile from './Components/Profile';
import Child1 from './Components/Child1';
import { createContext } from 'react';
import Counter from './Components/Counter';

const data = createContext();
//New Commentssssss
const data1 = createContext();

const namedata = createContext();

function App() {
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
      </ul>
     
    </div>
  </div>
</nav>

   </>
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
  <Route path='/home' element={<Home />} />
  <Route path='/contact' element={<Contact />} />
  <Route path='/about' element={<About />} />
  <Route path='/main' element={<AboutMain />} />
  <Route path='/aboutteam' element={<AboutTeam />} />
  <Route path='/user/:name' element={<User />} />
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
