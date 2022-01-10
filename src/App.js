import "./App.css";
import React, { useState, useEffect } from 'react'

function App() {

 const [ text, SetText ] = useState("")

 useEffect(() => {
   console.log(text);
   
 }, [text])

 const handleChange = (e) => {
   SetText(e.target.value)
 }
 const handleSave = () => {
   localStorage.setItem('savedData', text)
 }
 const handleClear = () => {
   SetText("")
 }
 const handleLoad = () => {
   SetText(localStorage.getItem('savedData'))
 }

  return (
    <div className="App">
      <div className="box">
        <div className="field">
          <div className="control">
            <textarea onChange={handleChange} onLoad={handleLoad} value={text}  className="textarea is-large" placeholder="Notes..." />
          </div>
        </div>
        <button onClick={handleSave} className="button is-large is-primary is-active">Save</button>
        <button onClick={handleClear} className="button is-large">Clear</button>
      </div>
    </div>
  );
}

export default App;
