
import Actor from './Actor'
import './App.css'
import Books from './BookStore';
import Singer from './Singer'



function App() {
  
  const actors = ['sakib', 'apu', 'purnima']
  const singers = [
    { id: 1, name: 'monir', age: 68 },
    { id: 1, name: 'konok', age: 68 },
    { id: 1, name: 'imran', age: 68 },
    { id: 1, name: 'pritom', age: 68 },
    { id: 1, name: 'tutul', age: 68 }
  ];
  const books = [
    { id: 1, name: 'bangla',price: 100},
    { id: 1, name: 'english',price: 100},
    { id: 1, name: 'math',price: 100}
  ]
  return (
    <>
      <Books books={books}></Books>
  
      {/* <Actor name="rojina akter"></Actor>
      <Singer singer='ami'></Singer>
      {
        actors.map(actors => <Actor name={actors}></Actor>)
        
        
      }
      {
        singers.map(singer =><Singer singer={singer}></Singer>)
      } */}
      
    </>
  )
  
}


export default App
