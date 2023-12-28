
"use server"

// server component handling private pages for user editing

import { headers } from "next/headers";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import Library from "@/app/u/lib/lib"
import AddButton from "@/app/u/lib/addButton"

export default async function Public(props: { username: string }) {
  // const [data, setData] = useState(null);
  const res = await fetch('http://localhost:3000/api/user/data', {method: "GET", headers: headers()});
  const data = await res.json();
  var lib = data.lib;

  const session = await getServerSession(options);
    
  const addItem = () => {
    "use server"

    lib.push({
      type: 'note',
      metadata: {content: JSON.stringify(session.user)}
    });
    console.log(lib);
  }

  return (
    <div>
      <h1>{data.name} (Editable)</h1>
      <p>{data.bio} (Editable)</p>
      <br></br>
      <div>
        {/* <AddButton addServerItem={addItem} /> ISSUE WITH HANDLER */} 
      </div>
      <Library 
        items={data.lib}
        spotify_token={session ? session.user.spotify_token : null} />
    </div>
  );
}
