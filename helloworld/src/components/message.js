import {Component} from "react"

class Message extends Component{
    state={
        message:"hlo"
    }
chan=()=>{
    this.setState({message:"thank for subscribe"})
}

    render(){
        return (
            <div>
            <h1>{this.state.message}</h1>
            <button onClick={this.chan}>subscribe</button>
            </div>
            )
    }
}

export default Message