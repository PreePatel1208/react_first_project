import React, {useState} from 'react'
import PropTypes from 'prop-types';


export default function TextForm(props) {
const [text,setText]=useState('enter here');
const hadleClick=(event)=>{
   let newText=text.toUpperCase();
   setText(newText);
}
const handleChange=(event)=>{
    console.log("on chnage");
    setText(event.target.value);
   
}
const hadleClickToLower=()=>{
    let newText=text.toLowerCase();
    setText(newText);
   props. showAlert("text converted to lowercase","success");
}
const hadleClickToClear=()=>{
    let newText='';
    setText(newText);
}
const handleCopy=()=>{
    console.log('copy');
   var text= document.getElementById("exampleFormControlTextarea1")
   text.select();
   navigator.clipboard.writeText(text.value);
}
const handleRemoveSpace=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
}

    return (
        <div>
            <form>
                <div className="container my-3">
                    <div className="form-group">
                        <label >{props.heading}</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handleChange} value={text} rows="6"></textarea>
                    </div>           
                <button type="button" className="btn btn-dark mx-2" onClick={hadleClick}>ToUppercase</button>
                <button type="button" className="btn btn-info mx-2" onClick={hadleClickToLower}>ToLowerCase</button>
                <button type="button" className="btn btn-warning mx-2" onClick={hadleClickToClear}>ClearText</button>
                <button type="button" onClick={handleCopy} className="btn btn-secondary mx-2">Copy text</button>
                 <button type="button"  onClick={handleRemoveSpace} className="btn btn-danger">Remove Extra Space</button>
                <h1>your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} character in string</p>
            <h2>Preview</h2>
            <p>{text}</p>
                </div>

            </form>
         
        </div>
    )
}
TextForm.propTypes = {
    heading: PropTypes.string.isRequired,
};
TextForm.defaultProps = {
    heading: "Text Here....",
};