import React, { Component } from 'react'

export class EventBinder extends Component {
    state = {
        message:"hello!"
    }

    test = () =>{
        this.setState({
            message:"Done with this!"
        })
    }
  render() {
    return (
      <div>
          <div>{this.state.message}</div>
          <button onClick={this.test}>Don't Click!</button>
      </div>
    )
  }
}

export default EventBinder