import React, {useState} from 'react'

export default function Textform(props) {
  const [text, settext] = useState("Enter the text here");
  const handleonchange=(event)=>{
    settext(event.target.value)
  }
  const handleUpcase =()=>{
    let newtext = text.toUpperCase();
    settext(newtext)
  }
  return (
    <div>
        <h1>{props.heading} </h1>
        <div className='mb-3'>
            <textarea className="form-control" value={text} onChange={handleonchange}  id="myBox" cols={8} rows={10}></textarea>
        </div>
        <button type="button" className="btn btn-primary" onClick={handleUpcase}>Convert to uppercase</button>
    </div>
  )
}
