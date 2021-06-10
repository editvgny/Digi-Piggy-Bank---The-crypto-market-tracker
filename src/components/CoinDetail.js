import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {makeStyles} from "@material-ui/core";
import axios from "axios";
import configData from "../.config.json";

export default function CoinDetail() {
    const {id} = useParams();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?CMC_PRO_API_KEY=${configData.Api.API_KEY}&id=${id}`)
            .then((response) => {
                // console.log(response)
                setData(response.data.data)
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    const useStyles = makeStyles({
            content: {
                top: "150px",
                position: "absolute",
                left: "10%",
                right: "10%"

            },
            detail_header: {
                display: "-webkit-box",
                paddingTop: "8px",
                paddingRight: "24px",
                paddingBottom: "8px",
                boxSizing: "border-box",
            },
            detail_body: {
                paddingRight: "24px",
                boxSizing: "border-box",
                margin: 0,

            },
            image: {
                width: "32px",
                height: "32px"
            },
            description: {
                textAlign: "justify"
            },
        }
    )

    const classes = useStyles();

    if (isLoading) {
        return (
            <React.Fragment>
                Loading
            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment>
                <div className={classes.content}>
                    <div className={classes.detail_header}>
                        <img src={"https://s2.coinmarketcap.com/static/img/coins/64x64/" + id + ".png"} alt="icon"
                             className={classes.image}/>
                        <h1>{data[`${id}`].name}</h1>
                        <span>{data[`${id}`].symbol}</span>
                    </div>
                    <div className={classes.detail_body}>
                        <div className={classes.description}>{data[`${id}`].description}</div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}