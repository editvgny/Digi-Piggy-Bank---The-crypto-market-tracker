import React from "react";

export default function Translator(props) {
    const dictionary = {
        Name : {
            HUN : "Név",
            ENG : "Name",
        },
        "home" : {
            HUN : "főoldal",
            ENG : "home"
        }
    }

    function getLang(){
        //TODO Sessionből kiszedni majd a langot
        return "ENG"
    }
    const searchedText = props.text
    const textObject = dictionary[searchedText]
    const result = textObject[getLang()]

    return(
        <span>
            {result}
        </span>
    )
}