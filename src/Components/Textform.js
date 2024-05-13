import React, {useState} from 'react'

export default function Textform(props) {
  const [text, settext] = useState("");
  const handleonchange=(event)=>{
    settext(event.target.value)
  }
  const handleUpcase =()=>{
    let newtext = text.toUpperCase();
    settext(newtext)
  }
  const handleLocase =()=>{
    let newtext = text.toLowerCase();
    settext(newtext)
  }
  const handleReset =()=>{
    let newtext = "";
    settext(newtext)
  }
  
  return (
    <>
    <div className='container' style={{color: props.mode==='black'||'#198754'||'#061f45'?'white':'black',color:props.mode==='white'?'black':'white'}} >
        <h1>{props.heading} </h1>
        <div className='mb-2'>
            <textarea className="form-control" value={text} onChange={handleonchange}style={{backgroundColor:props.mode,color: props.mode==='black'||'#198754'||'#061f45'?'white':'black',color:props.mode==='white'?'black':'white'}}  id="myBox" cols={8} rows={10}></textarea>
        </div>
        <div className='d-grid gap-2 d-md-block'>
            <button type="button" className="btn btn-secondary mx-1" onClick={handleUpcase}>Convert to uppercase</button>
            <button type="button" className="btn btn-secondary mx-1" onClick={handleLocase}>Convert to lowercase</button>
             <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button className="btn btn-primary" type="button" onClick={handleReset}>Reset</button>
            </div>
        </div>
        
    </div>
    <div className='container ' style={{color: props.mode==='black'||'#198754'||'#061f45'?'white':'black', color:props.mode==='white'?'black':'white'}}>
        <h2>Your Text Summary</h2>
        <p>Words : {text.split(" ").length -1} </p>
        <p>Characters : {text.length} </p>
        <p>TIme to Read : {0.008*(text.split(" ").length-1) } minutes </p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>

    </>
  )
}
