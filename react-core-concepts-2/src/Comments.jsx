/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react"
import Comment from "./Comment";
import'./comment.css'

export default function Comments() {
    const [comments, setComment] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments")
        .then(res => res.json())
            .then(data => setComment(data))
    
    } ,[]);
    return (
        <div className="comment">
            <h1>comments:{comments.length}</h1>
            {  
            }
            {
                comments.map(comment=><Comment comment={comment}></Comment>)
            }

        </div>
    )
}