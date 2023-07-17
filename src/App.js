import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Textform from './Textform';
import Alert from './Alert';
import About from './About';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() 
{
  // let myStyle= {
  //   color: 'white',
  //   backgroundColor:'black'
  // }
  const [mode, setMode] = useState('light');
  const toggleMode = () =>
  {
    if(mode ==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark Mode has been enabled", "success");
      document.title='React App : Dark Mode';
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'White';
      showAlert("Light Mode has been enabled", "success");
      document.title='React App : Light Mode';
    }
  }
  const [alert, setAlert] = useState(null);
  const showAlert = (msg, type) =>
  {
    setAlert({
      msg : msg,
      type :type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  return (
    <>
      <BrowserRouter>
          <Navbar titletext = "Practice_App" abouttext = "Blogs" hometext = "Home" mode = {mode} toggleMode={toggleMode}/>
          <Alert alert = {alert}/>
          <div className = "container my-5" mode = {mode} toggleMode = {toggleMode}>
          <Routes>
            <Route exact path="/about" element={ <About mode={mode}/> } /> 
            {/*Since "exact" is used with "path" to exactly used complete matching concept...*/}
          </Routes>
          <Routes>
            <Route exact path="/" element={ <Textform showAlert = {showAlert} heading = "Enter the text to analyze" mode = {mode} toggleMode = {toggleMode}/> } />
          </Routes>
          </div>
      </BrowserRouter>
    </>
  );
}

export default App;
