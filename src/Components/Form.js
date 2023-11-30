import React, {useState} from "react";

export default function Form(props) {
  const [text, setText] = useState('Enter text here ');
  const handleUpClick = ()=> {
    console.log("Uppercse was clicked" + text);
    let newtext = text.toUpperCase();
    setText(newtext)
    // props.showAlert("Converted to UPPERCASE!!","Success");
  }


  
  
  const handleOnClick = (event)=> {
    console.log("onchange are successful");
    setText(event.target.value);
  }

  /// LowerCase button function using JavaScript
   
  const hanleTOLowerCase = (event) => {
    let newtext = text.toLowerCase();
    setText(newtext);
    // props.showAlert("Converted to lowercase!!","Success")
  }



/// Reverse button function using JavaScript

  function hanleTOReverseCase() {
    var userInpt = document.getElementById("mybox").value;
    document.getElementById("mybox").value = userInpt.split('').reverse().join('')
    // props.showAlert("Converted to reverse case!!",'Success')
  }
  


  /// Download button function using JavaScript

  function downloadtext(){
    var text = document.getElementById("mybox").value;
    text = text.replace(/\n/g,"\r\n");
    var blob =  new Blob([text], {type: "text/plan"});
    var anchor = document.createElement("a");
    anchor.download = "my-filename.txt";
    anchor.href = window.URL.createObjectURL(blob);
    anchor.target = "_blank";
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor)
  }
 
/// Clear button function using JavaScript
  const clear = ()=> {
    let newclear = "";
   setText(newclear)
  }



  return (
    <div>
      <>
        <div className="formContainer">
          <div className="mb-3"  style={{color: props.mode === 'dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <label htmlFor="mybox" className="form-label">Example textarea</label>
            <textarea className="form-control" id="mybox" onChange={handleOnClick} rows={8} value={text} defaultValue={""} 
              style={{backgroundColor: props.mode === 'dark'?'grey':'white'}} />
            {/* <button className="btn btn-primary mt-3 m-lg-3" onClick={ToSentenceCase}>Sentence case</button> */}
            <button className="btn btn-primary mt-3 m-lg-3" onClick={handleUpClick}>UPPER CASE</button>
            <button className="btn btn-primary mt-3 m-lg-3" onClick={hanleTOLowerCase}>lower case</button>
            <button className="btn btn-primary mt-3 m-lg-3" onClick={hanleTOReverseCase}>Reverse</button>
            <button className="btn btn-primary mt-3 m-lg-3" onClick={downloadtext}>Download</button>
            <button className="btn btn-primary mt-3 m-lg-3" onClick={clear}>Clear</button>
          </div>
          <div className="wordConainer" style={{color:props.mode=== 'dark'?'white':'black'}} >
            <h3>Your text summary  </h3>
            <p>{text.split(" ").length} Words and {text.length} charaters </p>
            <p>{0.008 * text.split("").length} Minutes read.</p>
          </div>
        </div>
      </>
    </div>
  );
}
