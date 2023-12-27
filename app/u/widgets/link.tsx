
import "@/app/u/widgets/link.css"
import axios from 'axios'

import { useState, useEffect } from 'react';

export default function note(props : any) {

    const [data, setData] = useState(null);

    useEffect(() => {
    
        async function fetchMetadata() {
            try {
                const response = await axios.get(props.metadata.url);
                const html = response.data;

                const titleRegex = /<title>(.*?)<\/title>/i;
                const ogTitleRegex = /<meta\s+property=["']og:title["']\s+content=["'](.*?)["']\s*\/?>/i;
                const ogDescriptionRegex = /<meta\s+property=["']og:description["']\s+content=["'](.*?)["']\s*\/?>/i;
                const ogImageRegex = /<meta\s+property=["']og:image["']\s+content=["'](.*?)["']\s*\/?>/i;

                const titleMatch = html.match(titleRegex);
                const ogTitleMatch = html.match(ogTitleRegex);
                const ogDescriptionMatch = html.match(ogDescriptionRegex);
                const ogImageMatch = html.match(ogImageRegex);

                const title = titleMatch ? titleMatch[1] : '';
                const ogTitle = ogTitleMatch ? ogTitleMatch[1] : '';
                const description = ogDescriptionMatch ? ogDescriptionMatch[1] : '';
                const image = ogImageMatch ? ogImageMatch[1] : '';

                console.log(ogTitle || title, description, image);
            } catch (error) {
                console.error('Error fetching metadata:', error);
                return null;
            }
        }

    fetchMetadata(); // Invoke the async function

  }, []);


    return(
        <div className="link">
            <h1>Link</h1>
            <p>{props.metadata.url}</p>
        </div>
    )


}