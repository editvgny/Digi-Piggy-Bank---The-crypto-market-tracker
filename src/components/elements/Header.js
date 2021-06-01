import React, {useEffect} from "react";
import {makeStyles} from "@material-ui/core";
import NavbarBrand from "./NavbarBrand";
import NavbarSearch from "./NavbarSearch";
import LoginHandler from "./LoginHandler";

export default function Header(){

    const useStyles = makeStyles({
        header: {
            left: 0,
            right: 0,
            position: "fixed",
            top: 0,
            height: 50,
            backgroundColor: "#FAB2D4",
            display: "flex"

        },
        list:{
            flexDirection: "row",
            display: "flex",
            marginLeft: "auto",
            listStyleType: "none"
        },
        item: {
            display: "list-item",
            position: "relative"
        }

    });

    const classes = useStyles();

    return (
        <div className={classes.header}>
            <NavbarBrand />
            <ul className={classes.list}>
                <li className={classes.item}>
                    <NavbarSearch />
                </li>
                <li>
                    <LoginHandler />
                </li>
            </ul>
        </div>
    )
}