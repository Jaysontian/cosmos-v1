"use client"

import useSWR from 'swr';
import axios from 'axios';
import "@/app/u/widgets/spotifytop.css"

import SpotifyButton from "@/app/signin/apps/spotifybutton";

const fetcher = ([url, token] : any) => axios
      .get(url, { headers: { Authorization: "Bearer " + token } })
      .then((res) => res.data);

const widgetContents = (props : any) => {

    if (props.token == null) return (<><h2>Your Top 5</h2><SpotifyButton></SpotifyButton></>);
    const { data, error } = useSWR([`https://api.spotify.com/v1/me/top/tracks?limit=5`, props.token.access_token], fetcher);

    if (error && error.response.status == 401){
        fetch('http://localhost:3000/api/auth/spotify/refresh_token').then(res => res.json()).then(data => console.log('Token refresh success:', data));
        return(<div>Spotify did not grant access. Either you need to be added to developer beta or your refresh token expired. Contact Jayson.</div>);
    }

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