import { useState } from "react"

export default function Team() {
    const teamStyle = {
        border: '2px solid yellow',
        margin: '15',
        padding:'15px'
    }
    const [count, setCount] = useState(11);
    const add = () => {
        const newcount = count + 1
        setCount(newcount)

    }
    const remove = () => {
        const newCount = count - 1
        setCount(newCount)
    }
    return (
        <div style={teamStyle}>
            <h1 >players:{count}</h1>
            <button onClick={add}>player add</button>
            <button onClick={remove}>player remove</button>
        </div>
    )
}