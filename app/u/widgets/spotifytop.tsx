"use client"

import useSWR from 'swr';
import axios from 'axios';

import "@/app/u/widgets/spotifytop.css"

const fetcher = ([url, token]) => axios
      .get(url, { headers: { Authorization: "Bearer " + token } })
      .then((res) => res.data);

export default function spotifyTopWidget(props : any) {


    const { data, error } = useSWR([`https://api.spotify.com/v1/me/top/tracks?limit=5`, props.token.access_token], fetcher);

    if (error) console.log(error);
    if (data) console.log(data);

    var songs;
    if (data) {
        songs = (data.items).map((song, index) => (
            <div className="track" key={index}>
                <img src={song.album.images[0].url}></img>
                <div onClick={()=>{window.open(song.external_urls.spotify)}}>
                    <h1>{song.name}</h1>
                    <p>{song.artists[0].name}</p>
                </div>
            </div>
        ))
    }

    return(
        <>
            {data ? <div className="tracklist-con"><h2>Your Top 5</h2>{songs}</div> : <div>loading</div>}
        </>
    )
}