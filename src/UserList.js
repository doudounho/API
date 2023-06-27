import React, { useEffect, useState } from 'react'
import axios from 'axios'
function UserList() {
    const [post, setPost] = useState({})
    const [id, setId] =useState(1)
    const [state, setState] =useState(0);
    const increment = () => {
        setState(state + 1);
    };
     


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/$(id) ')
        .then(res =>{
            console.log(res)
            setPost(res.data )
            setState(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    },[] )
  return (
    <div>
        <button onClick={increment}>Counter : {state} </button>
        <input type="text" value={id} onChange={e => setId(e.target.value)}/>
        <div>{post.title} </div>
        
            {/*
                <ul>
                        {
                              post.map(post =>(
                                <li key ={post.id}>{post.title} </li>
                            ))
                        }  
                </ul>*/
              
            }
        
    </div>
  )
}

export default UserList