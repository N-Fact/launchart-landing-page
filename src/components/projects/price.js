/** @jsxRuntime classic */
/** @jsx jsx */

import {useState, useEffect} from "react";
import {jsx} from "theme-ui";
import React from 'react';

const Web3 = require('web3');
const provider = new Web3.providers.HttpProvider('https://api.avax.network/ext/bc/C/rpc');
const web3 = new Web3(provider);
const abi = require('./abi.json');
const address = '0x1C6F5d2C6947753B668D63CC4ce8f9A4907CB220';
const contract = new web3.eth.Contract(abi, address);

export default function price({price, projectKey}) {
    if (isNaN(price)) {
        return price;
    }
    console.log(projectKey);
    //let returnPrice = price.toFixed(2);
    const [returnPrice, setReturnPrice] = useState(price.toString() + ' AVAX 🔺')
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        //console.log('usd:', usd);
        const sendPromise = contract.methods.getLatestPrice().call().then(function (transaction) {
            console.log("transaction", transaction);
            if (transaction > 0) {
                //console.log(Number(transaction) / 100000000);
                let usdPrice = (Number(transaction) / 100000000 * price).toFixed(2)
                setReturnPrice(price.toString() + ' AVAX 🔺 ( ' + usdPrice + ' USD )')
                setLoading(false)
            }
        });

    }, [])


    if (isLoading) {
        return (
            <>
                {returnPrice}
            </>
        );
    }
    //if (!usd) return <p>Noooo !!! </p>

    //if (usd > 0)
    //price = price.toString().replace('Supply', usd.toString());

    return (
        <>
            {returnPrice}
        </>
    );
}
