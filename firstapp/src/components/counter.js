import React from 'react';

class Counter extends React.Component{
    state = {
        count:0,
        count1:5
    }
    inc = () => {
        
        this.setState(x =>({
            count:x.count+1,
            count1:x.count1+5
            
        }),() => console.log(this.state.count,this.state.count1))

         console.log(this.state.count , this.state.count1)
        
    }

    inc5=()=>{
      for(let i =0; i<5; i++){
          this.inc()
      }
    }
    render() 
    {
        return(
            <div>
               count - {this.state.count} ----------- count1 - {this.state.count1}
               <button onClick={this.inc5}>Increment</button>
            </div>
        )
    }
       
}

export default Counter;