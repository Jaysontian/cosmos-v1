"use client"

import { experimental_useFormState as useFormState } from 'react-dom'


export default function(props : any) {
    
    const [state, formAction] = useFormState(createItem, initialState);

    return(<>
    
        <form action={formAction}>Add Widget</form>
    
    
    </>);


}