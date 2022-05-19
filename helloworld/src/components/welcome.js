// import {Component} from "react"

// class Welcome extends Component{
//     render(){
//         return (
//             <div>
//             <h1>hello {this.props.name} a.k.a {this.props.heroName}</h1>
//             {this.props.children}
//             </div>
//             )
//     }
// }


const Welcome =({name,heroName})=>
     <h1> {name} , {heroName}</h1>


export default Welcome