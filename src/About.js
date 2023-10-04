import React from 'react';
import {  Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <h2>About</h2>
      <ul>
        <li>
          <Link to="/main">Main</Link>
          <Link to="/aboutteam">AboutTeam</Link>
        </li>
      </ul>

     
    </div>
  );
}

export default About;
