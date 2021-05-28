import React, {useEffect, useState} from "react";
import axios from "axios";

export const MarketData = (dependencies) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=986c3e46-36a2-44d4-82cf-b2d00720eac1`)
            .then((response) => {
                console.log(response.data.data)
                setData(response.data.data)
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error)
            })
    }, dependencies)

    return [
        isLoading,
        data
    ]
}