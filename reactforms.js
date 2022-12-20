import React, {useState} from "react";


const [name, setName] = useState("");
const [headingText, setHeading] = useState("";)

function handleChange(){
  setName(event.target.value);
}

function handleClick(){
 setHeading(name);
}


function App() {
  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <input onChange ={handleChange} 
      type="text" 
      placeholder="What's your name?" 
      value = {name}
      />
      <button onClick = {handleClick}>Submit</button>
    </div>
  );
}

export default App;
