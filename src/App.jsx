import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItem from "./components/foodItem";
import ErrorMsg from "./components/errorMessage";
import Container from "./components/Container";
import LanguageInput from "./components/langInput";
import { useState } from "react";

function App() {
  let[programmingLang,setLanguage]=useState([]);
  // let programmingLang = ["C", "CPP", "Javascript", "Python", "GO"];
  // let programmingLang=[];

  // let textState=useState("Hare krishna"); //it is a one type of HOOK also return array in which have 2 types of array
  // let textToShow=textState[0];
  // // let textStatemethod=textState[1];
  // let setTextState=textState[1];


  let[textToShow,setTextState]=useState("Python is best");
  console.log(`the current val is :${textToShow}`);

 
  const onKeyDown=(event)=>{
    if(event.key==='Enter'){
      let newLang=event.target.value;  
      event.target.value="";
      let newLanguages=[...programmingLang,newLang]; //...is s spread operator
      setLanguage(newLanguages);
    
    }
   
  }
 

  return (
    <>
    <Container>
      <h1 className="vk-h1">Programming Languages</h1>
      <LanguageInput handleKeyDown={onKeyDown}></LanguageInput>
     
      <ErrorMsg items={programmingLang}></ErrorMsg>
      <FoodItem items={programmingLang}></FoodItem>
     
    </Container>
    <Container>
      <p>Above is the list of Best prgoramming Languages you must have to learn these.</p>
    </Container>
    </>
  );
}

export default App;

//falsy values are : null,undefined,zero,NaN,empty ->JSX ignore this
