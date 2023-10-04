import React from 'react'

import { Link } from 'react-router-dom';

function AboutMain() {
  return (
    <>
   
    <Link to="./Home">Home</Link>
    <Link to="./about">About</Link>
    <Link to="./ontact">Contact</Link>

    </>
  );
}
export default AboutMain;