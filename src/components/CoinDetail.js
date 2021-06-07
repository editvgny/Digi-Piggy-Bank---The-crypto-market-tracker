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
        console.log(data)
        return (
            <React.Fragment>
                <div className={classes.content}>
                    {id}
                    {data[`${id}`].description}
                </div>
            </React.Fragment>
        )
    }
}