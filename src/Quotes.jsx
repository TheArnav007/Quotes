import React, {useState} from 'react';
import axios from "axios";
import DarkModeToggle from "react-dark-mode-toggle";
function Quotes() {
const [text, setText] = useState("Press the below Button to Generate");
const [author, setAuthor] = useState("");

function getQuotes(){
   axios.get("https://get-quotes-backend.herokuapp.com/",  { crossdomain: true }).then (function(res){
     setText(res.data.text);
     setAuthor(res.data.author);
   })
}
const [isDarkMode, setIsDarkMode] = useState(() => true);

function handleChange (){
  var classNameDark = 'dark-mode';
  var classNameLight = 'light-mode';
  setIsDarkMode(prevValue => {return !prevValue});
  document.body.classList.remove(
        isDarkMode ? classNameDark : classNameLight
    );
 document.body.classList.add(
  isDarkMode ? classNameLight : classNameDark
);
}



return (
  <div>
  <div className="headertxt">
      <h1 className={isDarkMode ? 'dark-mode' : 'light-mode'}> Random Quotes</h1>
  </div>
  <div className="maindiv">
  <div className="quotesdiv">
      <h1>{'"'+ text +'"'}</h1>
      <h6>{"-" + author}</h6>
  </div>
  <button class="btn btn-info btn-large" onClick={getQuotes}>
    Generate Quotes
  </button>
  <div className="darkdiv">
  <DarkModeToggle
      onChange={handleChange}
      checked={isDarkMode}
      size={50}
      speed={4}
    />
  </div>
  </div>
  </div>

  )
}
export default Quotes;
