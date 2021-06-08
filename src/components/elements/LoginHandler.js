import React from "react";
import {makeStyles} from "@material-ui/core";

export default function LoginHandler(){
    const useStyles = makeStyles({
        login: {

        }
    })
    const classes = useStyles();
    return (
        <div className={classes.login}>
            Login Handler
        </div>
    )
}