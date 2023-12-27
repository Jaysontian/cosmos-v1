
import "@/app/u/widgets/note.css"


export default function note(props : any) {

    return(
        <div className="note">
            <h1>Note</h1>
            <p>{props.metadata.content}</p>
        </div>
    )


}