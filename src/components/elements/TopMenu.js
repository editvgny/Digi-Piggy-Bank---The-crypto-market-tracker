import React, {useEffect} from "react";
import {makeStyles} from "@material-ui/core";

export default function TopMenu(){

    const useStyles = makeStyles({
        top_menu: {
            top: "50px",
            position: "fixed",
            height: "40px",
            backgroundColor: "#05165C",
            left: 0,
            right: 0,
            padding: 0,
            margin: 0
        }
    });

    const classes = useStyles();

    return (
        <div className={classes.top_menu}>
            TopMenu
        </div>
    )
}