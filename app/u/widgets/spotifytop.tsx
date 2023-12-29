"use client"

import useSWR from 'swr';
import axios from 'axios';
import "@/app/u/widgets/spotifytop.css"
import { useState, useEffect } from 'react'

import SpotifyButton from "@/app/signin/apps/spotifybutton";

const fetcher = ([url, token] : any) => axios
      .get(url, { headers: { Authorization: "Bearer " + token } })
      .then((res) => res.data);


const refetch = async() => {
    await fetch('http://localhost:3000/api/auth/spotify/refresh_token').then(res => res.json()).then(token => {
        console.log("Fetched new token: ", props.token, token);
        return token;
    }).catch((err) => {
        return(<div>Spotify did not grant access. Either you need to be added to developer beta or your refresh token expired. Contact Jayson.</div>);
    });
}

const widgetContents = (props : any) => {

    if (props.token == null) return (<><h2>Your Top 5</h2><SpotifyButton></SpotifyButton></>);

    const { data, error } = useSWR([`https://api.spotify.com/v1/me/top/tracks?limit=5`, props.token.access_token], fetcher, {
        onErrorRetry: (error, key, config, revalidate, { retryCount }) => {

            // // If not a 401 error, then return
            if (error.response.status !== 401) return
            // Only retry up to 2 times.
            if (retryCount >= 2) return
            console.log('RETRYING');
            
            refetch();
            

            // Retry after 5 seconds.
            setTimeout(() => revalidate({ retryCount }), 2000)
        }
    });

    // if (error && error.response.status == 401) {
    //     console.log("Refetching Data");
    //     fetch('http://localhost:3000/api/auth/spotify/refresh_token').then(res => res.json()).then(token => {
    //         props.token = token;
    //     }).catch((err) => {
    //         return(<div>Spotify did not grant access. Either you need to be added to developer beta or your refresh token expired. Contact Jayson.</div>);
    //     });
    //     const { data, error } = useSWR([`https://api.spotify.com/v1/me/top/tracks?limit=5`, props.token.access_token], fetcher);
    //     console.log("Refetched Data: ", data);
    // }



    // useEffect(()=>{
    //     console.log('USEEFFECT CALLED');
    //     if (refetch){
    //         fetch('http://localhost:3000/api/auth/spotify/refresh_token').then(res => res.json()).then(newtoken => {
    //             setToken(newtoken);
    //         }).catch((err) => {
    //             return(<div>Spotify did not grant access. Either you need to be added to developer beta or your refresh token expired. Contact Jayson.</div>);
    //         });
    //     }
    // }, [refetch]);

    // if (token.error == "invalid_grant"){
    //     console.log("CALLING USEEFFECT");
    //     setRefetch(true);
    // };

    // function App () {
    //     const [mounted, setMounted] = useState(false)
    //     const { data } = useSWR(mounted ? '/api/data' : null, fetchData)

    //     useEffect(() => {
    //         setMounted(true)
    //     }, [])
    // }
        
    if (!data) {return (<div>Loading Top Tracks</div>)}

    const songs = (data.items).map((song : any, index : any) => (
        <div className="track" key={index}>
            <img src={song.album.images[0].url}></img>
            <div onClick={()=>{window.open(song.external_urls.spotify)}}>
                <h1>{song.name}</h1>
                <p>{song.artists[0].name}</p>
            </div>
        </div>
    ));

    return(
        <>
            {data ? <div><h2>Your Top 5</h2>{songs}</div> : <div>Loading Top Tracks</div>}
        </>
    )
};

export default function spotifyTopWidget(props : any) {
    return(
        <div className="tracklist-con">
            {widgetContents(props)}
        </div>
    )
    
}