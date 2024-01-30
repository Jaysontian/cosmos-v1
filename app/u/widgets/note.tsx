
import "@/app/u/widgets/note.css"
// const { CohereClient } = require("cohere-ai");

// const cohere = new CohereClient({
//     token: "5KjBIa27ZNRC2r5eI1M1IUuMpjE2UDlhn70zz2Rd",
// });

export default async function note(props : any) {
    // const getKey = () => {
    //     cohere.generate({
    //         prompt: "Please explain to me how LLMs work",
    //     }).then((res : any)=>{
    //         console.log(res);
    //     });
    // }

    return(
        <div className="note">
            <h1>Note</h1>
            <p>{props.metadata.content}</p>
            <button>Generate Tag</button>
        </div>
    )


}