//  export default function Greet(){
//     return <h1>hello , rk</h1>
// }

// export default Greet

 const Greet=(props)=>{
     console.log(props.name , props.heroName , props.children)
 return(
     <div>
         <h1>
             hello {props.name} a.k.a {props.heroName}
         </h1>
         {props.children}
     </div>
 
 )
 }
 export default Greet