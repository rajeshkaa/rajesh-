import React from 'react';

function Mp(props) {
  const my_array = [];
    var {title,authors}=props.p
    for(var a in authors){
      var test = my_array.push(a)
    }
    // console.log(typeof(authors))
  return (
    <div>
<li>
    <h1>title: {title}</h1>
    <Authorscomp au={authors}/>
</li>
    </div>
  )
}

export default Mp;