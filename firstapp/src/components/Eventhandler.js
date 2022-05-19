import { useState } from 'react'

export default function Eventhandler() {
const [click,setClick]=useState(false)

function demo(){
    setClick(true)
}

    return(
        <div>
            <button onClick={demo}>click</button>
            
{click==true&&<h1>hello world</h1>}
        </div>
    )
}
