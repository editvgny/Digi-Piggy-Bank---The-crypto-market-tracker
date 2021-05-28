import React, {useState} from 'react';
import Translator from "./tools/Translator";
import {MarketData} from "./tools/MarketData";

export default function Home() {

    const [isLoading, data] = MarketData([]);

    return (
        <React.Fragment>
            <Translator text="home"/>
            {data.map(item => (
                <div key={item.id}> {item.name} </div>
            ))}
        </React.Fragment>
    )
}