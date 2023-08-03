import React from "react";
import Links from '../components/Links'
import userData from '../data/user'


function About(){
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{!userData.bio || userData.bio === '' ? '' : userData.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links links = {userData.links}/>
    </div>
  );
}

export default About;
