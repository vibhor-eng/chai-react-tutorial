import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from 'react-router-dom'

function Github(){
    const data = useLoaderData()
    // when component load this hook will call
    /* const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://api.github.com/users/hiteshchoudhary")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data);
        })
    },[]) */
    return(
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">Github Followers: {data.followers}
        <img className="text-center m-4 bg-gray-600 text-white p-4 text-3xl" src={data.avatar_url} alt="Git Avatar" />
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    if (!response.ok) {
        throw new Error('Failed to fetch user data');
    }
    const data = await response.json(); // Parse JSON here
    return data;
}