import React from "react"
import "./Input.css"
import { useState } from "react"
import sendData from "../Hook/Hookcs"

const Input = (props) => {
    const [text, setText] = useState("")
    const handleChange = (event) => {
        const val = event.target.value
        setText(val)
    }
    
    const handleClick = () => {
        if (navigator.onLine){
            sendData("http://127.0.0.1:8000/translate", {
                text: text,
                dest_lang: ["swahili"]
            })
            .then((res) => res.json())
            .then((data) => {
                
                props.setTranslated(data)
            })
            .catch((error) => {
                console.error(error); // Handle any errors that occurred during the Promise chain
            });
        }
        else {
            
            console.log("offline")
        }
    }

    return (
        <React.Fragment>
            <div className="row">
                <textarea onChange={handleChange} className="textArea" >

                </textarea>
                <button onClick={handleClick} className="btn" type="submit">
                    Translate
                </button>
            </div>
        </React.Fragment>
    )
}

export default Input