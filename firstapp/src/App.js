// // import logo from './logo.svg';
// // import './App.css';
// // import EventBinder from './components/EventBinder';
// // import Counter from './components/counter';
// // import { Welcome } from './components/welcome';
// // import Input_handler from './components/Input_handler';
// // import Parent from './components/parent'
// // import Eventhandler from './components/Eventhandler'

// import Todo from "./components/todo"
// function App() {
//   return(
//     <div>
//       <Todo/>
//     </div>
//    // <Parent/>
//     //  <Input_handler/>
//   )
//   // <Parent/>
//   // <Eventhandler/> 
//   // <Counter/> 
//       {/* <Welcome name="brk" name1="raj"/> */}
       
//       {/* <EventBinder/> */}
  
  
// }

// export default App;

import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      console.log(typeof(response.data));
      setPosts(response.data);
      setLoading(false);
    };

    loadPosts();
  }, []);

  return (
    <div className="App">
      <h3>Search Filter</h3>
      <input
        style={{ width: "30%", height: "25px" }}
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      {loading ? (
        <h4>Loading ...</h4>
      ) : (
        posts
          .filter((value) => {
            if (searchTitle === "") {
              return value;
            } else if (
              value.title.toLowerCase().includes(searchTitle.toLowerCase())
            ) {
              return value;
            }
          })
          .map((item) => <h5 key={item.id}>{item.title}</h5>)
      )}
    </div>
  );
}

export default App;