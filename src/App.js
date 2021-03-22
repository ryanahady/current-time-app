import React, { useState } from "react";
import './App.css';

function App() {
  let altText;
  let imgSrc; 
  let greetings;

  const now = new Date().toLocaleTimeString();
  const dateNow = new Date().toLocaleDateString();
  const currentHours = new Date().getHours(); 

  const [time, setTime] = useState(now);
  const [date, setDate] = useState(dateNow);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  //upadate time each second 
  setInterval(updateTime, 1000);
  setInterval(updateDate, 1000);

  function updateDate() {
    const newDate = new Date().toLocaleDateString();
    setDate(newDate);
  }

  function updateIconHours(){
    setInterval(currentHours, 1000);
  }
  
  if(currentHours < 12){
    greetings = 'Good Morning!';
    imgSrc = require('./morning.png').default;
    altText = "morning-image";
  }else if(currentHours < 18){
    greetings = 'Good Afternoon!';
    imgSrc = require('./afternoon.png').default;
    altText = "afternoon-image";
  }else{
    greetings = 'Good Night!';
    imgSrc = require('./night.png').default;
    altText = "night-image";
  }
  return (
    <div className="container">
      <div className="rowTop"><img src={imgSrc} alt={altText}/></div>
      <div className="row"><h1 style={{ paddingTop: "5%" }}>{greetings}</h1></div>
      <div className="row"><h1 style={{ paddingTop: "10%" }}>{date}</h1></div>
      <div className="row"><h1 style={{ paddingTop: "10%" }}>{time}</h1></div>
    </div>
  );
}

export default App;
