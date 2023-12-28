
import "@/app/u/widgets/link.css"

import { useState, useEffect } from 'react';
import { load } from "cheerio";


export default function note(props : any) {

    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchMetadata() {
            try {

                // Make a fetch call to the proxy method I coded on the route handler: /api/helpers/proxy/route.js
                const response = await fetch(`http://localhost:3000/api/helpers/proxy?url=${encodeURIComponent(props.metadata.url)}`);
                const htmlData = await response.json();
                const $ = load(htmlData);                   // load using cheerio module

                // code adapted from https://jaybarnes33.hashnode.dev/generating-link-previews-with-react-and-nodejs
                /* function to get needed values from meta tags to generate preview */
                const getMetaTag = (name : any) => {
                    return (
                        $(`meta[name=${name}]`).attr("content") ||
                        $(`meta[propety="twitter${name}"]`).attr("content") ||
                        $(`meta[property="og:${name}"]`).attr("content")
                    );
                };

                const preview = {
                    url: props.metadata.url,
                    title: $("title").first().text(),
                    favicon:
                        $('link[rel="shortcut icon"]').attr("href") ||
                        $('link[rel="alternate icon"]').attr("href"),
                    description: getMetaTag("description"),
                    image: getMetaTag("image"),
                    author: getMetaTag("author"),
                };

                setData(preview);

                // TODO: implement function to save preview data in database: "lib/[link]/metadata/cache" 




                
            } catch (error) {
                console.error('Error fetching metadata:', error);
                return null;
            }
        }
        if (props.metadata.cache == null){
            fetchMetadata(); // Invoke the async function
        } else {
            setData(props.metadata.cache);
        }
  }, []);

    if (data == null) return(<div className="link">Loading...</div>)

    return(
        <div className="link">
            <div>
                <img src={data.image}></img>
                <div onClick={()=>{window.open(props.metadata.url)}}>
                    <h1>{data.title}</h1>
                    <p className="details"> {data.author ? data.author + ' – ' : ''}{data.description}</p>
                    <a href={props.metadata.url}>{props.metadata.url}</a>
                </div>
            </div>
            {props.metadata.content ? <p className="notes">{props.metadata.content}</p> : null}
        </div>
    )


}