"use client"

// The library handles loading all the widgets in a users database.

import "@/app/u/[uid]/lib/lib.css";

import WidgetNote from "@/app/u/widgets/note"
import WidgetLink from "@/app/u/widgets/link"
import WidgetSpotifyTop from "@/app/u/widgets/spotifytop"


export default function(props : any) {

    const contents = (props.items).reverse().map((item : any, index : any) => {
        switch(item.type){
            case "note":
                return(<WidgetNote key={index} metadata={item.metadata} />);
            case "link":
                return(<WidgetLink key={index} metadata={item.metadata} />)
            case "spotifytop":
                return(<WidgetSpotifyTop key={index} token={props.spotify_token} />);
            default:
        }
    })

    return (
        <div className="lib-con">{contents}</div>
    )

}