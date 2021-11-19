import React from "react";
import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import {Projects} from "./Projects/Projects";
import {Work} from "./Work/Work";
import {Contacts} from "./Contacts/Contacts";
import {Footer} from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Skills/>
      <Projects/>
      <Work/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
