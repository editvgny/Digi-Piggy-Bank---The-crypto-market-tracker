import React from "react";
import {makeStyles} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search"


export default function NavbarSearch(){

    const useStyle = makeStyles(
        {
            inp: {
                width: "180px",
                padding: "5px 15px",
                height: "15px",
                background: "#f2f3f4",
                borderColor: "black",
                borderRadius: "30px",
                cursor: "text"
            },
            button: {
                position: "absolute",
                right: 0,
                top: 11,
                bottom: 0,
                border: "none",
                background: "none",
                borderRadius: "0 30px 30px 0",
                display: "-webkit-flex",
                // display: "flex",
                alignItems: "center",
                cursor: "pointer"

            },

            icon: {
                display: "inline-block",
            },

            form: {
                display: "block"
            }
        }
    )

    const classes = useStyle();

    return (
        <form className={classes.form}>
            <input type="text" className={classes.inp}/>
            <button className={classes.button}>
                <SearchIcon />
            </button>
        </form>
    );
}