import { useState } from "react"

export default function Counter() {
    
    const [count, setCount] = useState(0);
    const add = () => {
        const newCount = count + 1
        setCount(newCount)
    }
    const reduce = () => {
        const newCount = count - 1;
        setCount(newCount)
            
        }
    
    
    return (
        <div style={{border:'2px solid red'}}>
            <h1>count:{count}</h1>
            <button onClick={add}>add</button>
            <button onClick={reduce}>reduce</button>
        </div>
    )
}