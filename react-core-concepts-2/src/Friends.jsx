/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react"
import'./friends.css'
import Friend from "./Friend";

export default function Freinds() {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(res => res.json())
        .then(data=>setFriends(data))
    } ,[])
    return (
        <div className="box">
            <h1>friends: {friends.length}</h1>
            {
                friends.map(friend=><Friend friend={friend}></Friend>)
            }

        </div>
    )
}
/**
 * 1.state to hold date
 * 2.use effect with dependency array
 * 3.use fetch to load date
 * 4.set loaded data to the state
 */