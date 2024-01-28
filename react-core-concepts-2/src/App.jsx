
import './App.css'
import Comments from './Comments'
import Counter from './Counter'
import Profile from './Profile'
import Team from './Team'
import User from './Users'
import Freinds from './friends'

function App() {
  function handleClick() {
    alert('button click')
  }
  const handleClick2 = () => {
    alert('clik')
  }
  const addToPara = (num) => {
   alert(num + 5);
  }
  const addToPara2 = (num) => {
    alert(num-20)
  }
 
  return (
    <>
      <h1>react vite</h1>
      <Profile></Profile>
     <Comments></Comments>
      <Freinds></Freinds>
      <User></User>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>click me </button>
      <button onClick={handleClick2}>clickme2</button>
      <button onClick={() => { alert('third click') }}>third</button>
      <button onClick={() => { alert('click fourth') }}> fourth</button>
      <button onClick={() => { alert('fith') }}>fifth</button>
      <button onClick={() => addToPara(3)}>six</button>
      <button onClick={()=>addToPara2(5)}> seven</button>
    </>
  )
}

export default App
