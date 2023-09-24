// import React from 'react'
import { create } from 'zustand'
import axios from 'axios';

const showStore = create((set) => ({

    graphData: [],
    data:null,

    fetchData: async (id) => {
        const [graphRes, dataRes] = await Promise.all([
            axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`),
            axios.get(`https://api.coingecko.com/api/v3/coins/${id}`),
        ])

        // console.log(res.data);

        const graphData = graphRes.data.prices.map((price)=>{
            const [timestamp,p] = price;
            const date = new Date(timestamp).toLocaleDateString("en-us");
            return {
                Date: date,
                Price: p,
            };
        });
        console.log(dataRes)
        set({data:dataRes.data})
        set({graphData});
    }
}));

export default showStore
