import React from "react"
import "./translated.css"

const Translated = (props) => {
    return (
        <React.Fragment>
            
            <div className="translatedText row">
                <div className="destLang">
                    {Object.keys(props.translated)[0]}
                </div>
                <div className="text">
                    {props.translated.swahili}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Translated