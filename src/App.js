import axios from 'axios'
import {useState} from 'react'
import './App.css';

function App() {

  const [posts, setPosts]=useState([]);

  const getAllPosts = () =>{
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=> {
      setPosts(response.data)

  })

  }

  return (
    
    <>
      <button onClick={getAllPosts}>Get All Photos</button>

      {
        posts.map((post,index)=>(
          <div className='item-parent'>
            <div className='items'>
              <p>{post.title}</p>
              <p>{post.body}</p>
            </div>
          </div>
        ))
      }
    </>

  );
}

export default App;
