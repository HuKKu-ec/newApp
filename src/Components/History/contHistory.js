import React, { useContext, useEffect, useState } from 'react'
import './History.css'
import { FirebaseContext } from '../../store/Context'
function contHistory() {
    const [post,setPost] = useState([])
    const { firebase } = useContext(FirebaseContext)
    useEffect(() => {
        firebase.firestore().collection("data").get().then((snapshot)=>{
            const allPost=snapshot.docs.map((data)=>{
                return{
                    ...data.data(),
                    
                }
            })
            setPost(allPost)
        })
    },[])
    return (
        <div className="container">

    {
        post.map((value,i)=>{
            return<div key={i} className="card">
            <h1>{value.name}</h1>
            <p>{value.date}</p>
            <p>{value.cost}</p>
            <p>{value.description}</p>
           </div>

        })
    }



        </div>
    )
    }

export default contHistory
