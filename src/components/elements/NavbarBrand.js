import React from "react";
import {makeStyles} from "@material-ui/core";

export default function NavbarBrand(){

    const useStyles = makeStyles({
        brand: {
            height: "50px",
            width: "220px",
            display: "flex",
            alignItems: "center"
        }
    });

    const classes = useStyles();

    return(
        <div className={useStyles().brand}>
            BRAND
        </div>
    )
}