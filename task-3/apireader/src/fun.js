import Mp from "./mp";

function Detailsupdater(props) {
  var raj = props.daa.items


  // console.log(raj)

  
    return ( 
      <div>
        
        <ul>
          {raj.map(p => 
          <Mp p={p.volumeInfo}/>)}
          </ul>
        {/* <p> height - {props.daa.height}</p>
        <p>mass - {props.daa.mass}</p>
        <p> skin color - {props.daa.skin_color}</p> */}
      </div>
    );
  }
  
  export default Detailsupdater