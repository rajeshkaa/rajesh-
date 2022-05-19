import React from "react"

const Hello=()=>{
//     return(
//     <div>
//         <h1>hello raj</h1>
//     </div>
// )
return React.createElement("div",null,React.createElement("h1",{className:"dummy",children:"...",id:"hlo"}),React.createElement("h5",{className:"dummy",children:"...",id:"hlo"}))
}

export default Hello