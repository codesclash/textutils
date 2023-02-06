import React,{ useState } from "react";

export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleUprCase =()=>{
        //console.log("Upper Case was clicked");
        let NewText=text.toUpperCase();
        setText(NewText);
        props.showAlert("Text Converted To Upper Case","success");

    }
    const handleLowCase =()=>{
        //console.log("Upper Case was clicked");
        let NewText=text.toLowerCase();
        setText(NewText);
        props.showAlert("Text Converted To Lower Case","success");

    }
    const handleOnChange =(event)=>{
       // console.log("Change Seen");
        setText(event.target.value);

    }
    const handleClear =(event)=>{
         setText("");
         props.showAlert("TextCleared","success");
 
     }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Now Speaking!","success");
      }
      
      const handleExtraSpaces = () => {
        let t1=text.split(/[ ]+/);
        setText(t1.join(" "));
        props.showAlert("Extra Spaces Cleared!","success");

      }

    let words=text.split(" ").length;


    return (
        <>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label"><h1>{props.heading}</h1></label>

                    <textarea className="form-control" style={{backgroundColor:props.mode==="dark"?"grey":"white",color:props.mode==="dark"?"white":"black"}} id="exampleFormControlTextarea1" rows="6" value={text} onChange={handleOnChange}></textarea>
            </div>
        </div>
        <div className="container my-3">
             <button className="btn btn-primary mx-1"onClick={handleUprCase}>Convert To UpperCase</button>
             <button className="btn btn-primary mx-1"onClick={handleLowCase}>Convert To LowerCase</button>
             <button className="btn btn-primary mx-1"onClick={handleClear}>Clear</button>
             <button type="submit" onClick={speak} className="btn btn-primary mx-1">Speak</button>
             <button className="btn btn-primary mx-1"onClick={handleExtraSpaces}>Clear Extra Spaces</button>
        </div>
            
        
        <div className="container my-3"style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>Summary</h1>
            <p>No Of Words:{words} <br></br>    
               Characters:{text.length}<br></br>
               Approx Time to Read: {Math.round(words*0.0076)} Min(s)</p>
         </div>
        </>
    );
}
