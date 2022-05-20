import {useState,useEffect} from 'react'
import axios from "axios"
function App() {
  const [dat,setData]=useState([])
  const [country,setCountry]=useState([])

  useEffect(()=>{
    axios.get("https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json")
    .then(res=>setData(res.data))
    .catch(err=>console.log(err))
  },[])

  console.log(data)
  return (
    <div>App</div>
  )
}

export default App