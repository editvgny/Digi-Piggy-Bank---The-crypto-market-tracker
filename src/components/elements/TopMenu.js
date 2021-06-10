import React from "react";
import {makeStyles} from "@material-ui/core";
import {MenuData} from "./MenuData";

export default function TopMenu() {

    const useStyles = makeStyles({
        top_menu: {
            top: "60px",
            position: "fixed",
            height: "auto",
            backgroundColor: "#7285e8",
            color:"white",
            left: 0,
            right: 0,
            padding: 0,
            margin: 0,
            zIndex: 1
        },
        nav_menu: {
            height:"auto",
            display: "flex",
            flexWrap: "nowrap",
            listStyle: "none",
            marginLeft: 0,
            marginRight: 0,
        },
        list_item: {
            display: "block",
            position: "relative",
            listStyle: "none",
            alignItems: "center",
            color: "white",
        },
        list_a: {
            textDecoration: "none",
            display: "inline-flex",
            padding: "10px 20px",
            color: "white",
        }
    });

    const classes = useStyles();

    return (
        <div className={classes.top_menu}>
            <ul className={classes.nav_menu}>
                {MenuData.map((item, index) => {
                    return <li className={classes.list_item} key={index}>
                        <a href={item.path} className={classes.list_a}>
                            <span>
                                {item.title}
                            </span>
                        </a>
                    </li>
                })}
            </ul>
        </div>
    )
}