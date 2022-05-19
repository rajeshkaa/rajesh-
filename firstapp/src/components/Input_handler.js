import React from "react";

class Input_handler extends React.Component{
    state = {
        name :"",
        comment : "",
        topic : 'react',
    }
    name_handler = (e) => {
        this.setState({
            name : e.target.value
        }, () => console.log(this.state.name))
    }
    comment_handler = (e) => {
        this.setState({
            comment : e.target.value
        })
    }
    submit_handler = (e) => {
        alert(`${this.state.name}, ${this.state.comment}, ${this.state.topic}`)
        e.preventDefault()
    }
    option_handler = e =>{
        this.setState({
            topic : e.target.value
        }, () => console.log(this.state.topic))
    }
  render() {
    return (
      <>
      <form onSubmit={this.submit_handler}>
        <div>
          <label>Username</label>
          <input onChange={this.name_handler}/>
        </div>
        <div>
          <label>Comments</label>
          <textarea onChange={this.comment_handler}></textarea>
        </div>
        <div>
          <select onChange={this.option_handler}>
            <option value="react">React</option>
            <option>Angular</option>
            <option>vue</option>
          </select>
        </div>
        <button >Submit</button>
      </form>
      </>
    );
  }
}

export default Input_handler;
