import Child from "./child"

import { Component } from "react"

class Parent extends Component{
    constructor(props){
        super(props)
    
    this.state={
        stat:"parent"
    }

    this.fun = this.fun.bind(this)
}
     fun(cname) {
        alert(`hello ${this.state.stat} from ${cname}`)
    }
    render(){
        return(
            <div>
                <Child gree={this.fun}/>
            </div>
        
        )
    }
}

export default Parent