import React, {useState} from 'react'

export default function Textform(props) {
  const handleUpClick = () =>{
    console.log("UpperCase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!!", "success");
  }
  const handleLowClick = () =>{
    console.log("LowerCase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!!", "success");
  }
  const handleOnChange = (event) =>{
    console.log("On Change");
    setText(event.target.value);
  }
  const handleClear = (event) =>{
    setText('');
    props.showAlert("All text has been Removed!!", "success");
  }
  const [text, setText] = useState('');


  const [myStyle,setmyStyle] = useState({
      color: 'black',
      backgroundColor:'White'
  })
  const[btntext, setBtnText] = useState("Enable  Mode"); 

  const toggleStyle = () => {
    if(myStyle.color === 'white')
    {
      setmyStyle({
        color: 'black',
        backgroundColor:'white'
      }) 
      setBtnText("Enable Dark Mode");
    }
    else{
      setmyStyle({
        color: 'white',
        backgroundColor:'black'
      })
      setBtnText("Enable Light Mode");
    }
  }

  return (
    <>
  <div style = {myStyle}>
  <h1>{props.heading}</h1>
  <div class="mb-3">
    <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8" style={{backgroundColor:props.mode==='dark'?'grey':'#e2e7eb', color:props.mode==='dark'?'white':'black'}}/>
  </div>
    <li style={{listStyle:'none'}}>
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown">What to to?</a>
          <ul className="dropdown-menu">
            <li><button type="submit" onClick={handleUpClick} className="dropdown-item" style = {myStyle}>toUpperCase</button></li>
            <li><button type="submit" onClick={handleLowClick} className="dropdown-item" style = {myStyle}>toLowerCase</button></li>
            <li><button type="submit" onClick={handleClear} className="dropdown-item" style = {myStyle} >ClearText</button></li>
          </ul>
    </li>
</div>
<div className= "container my-3" style = {myStyle}>
  <h1>Your text Summary:</h1> 
  <p>Number of words are: {text.split(" ").filter((element) => {return element.length!==0}).length} Words and Number of Characters are: {text.length}.</p>
  <h3>Your text Preview:</h3>
  <p>{text}</p>

  <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
  </div>
</>
)
}