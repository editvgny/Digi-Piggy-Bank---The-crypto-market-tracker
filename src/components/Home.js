import React, {useState} from 'react';
import Translator from "./tools/Translator";
import {MarketData} from "./tools/MarketData";
import {makeStyles} from "@material-ui/core";


export default function Home() {

    const [isLoading, data] = MarketData([]);

    const useStyles = makeStyles({
            content: {
                top: "90px",
                position: "relative",
            }
        }
    )

    const classes = useStyles();

    if(isLoading){
        return (
            <React.Fragment>
                Loading
            </React.Fragment>
        )
    }else{
        return (
            <React.Fragment>
                <div className={classes.content}>
                    <Translator text="home"/>
                    <div>{data.map(item => (
                        <div key={item.id}> {item.name} </div>
                    ))}
                    </div>
                </div>
            </React.Fragment>
        )
    }

}