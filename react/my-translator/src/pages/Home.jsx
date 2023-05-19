import React from "react";
import Input from "../components/Input/Input";
import Translated from "../components/Translated/translated";

const Home = (props) => {
    return (
        <React.Fragment>
            <div className="headingPrimary">
                <h1>Translate text</h1>
            </div>
            <Input
            translated={props.translated}
            setTranslated={props.setTranslated}
             />
            
            {Object.entries(props.translated).length > 0 ? 
            <Translated 
            translated={props.translated}
            
            /> : null}
        </React.Fragment>
    )
}

export default Home