
import { useEffect, useState } from 'react'
import './App.css'
import Watch from './Components/Watch/Watch'

function App() {
  const [watches, setWatches] = useState([]);
  useEffect(() => {
    fetch('watches.json')
      .then(res => res.json())
    .then(data => setWatches(data))
  },[])
//  const watches =  [
//     {
//       brand: "Apple",
//       model: "Apple Watch Series 6",
//       features: [
//         "GPS",
//         "Heart Rate Monitor",
//         "ECG",
//         "Blood Oxygen",
//         "Water Resistant",
//       ],
//       price: 399.99,
//     },
//     {
//       brand: "Samsung",
//       model: "Galaxy Watch 4",
//       features: [
//         "Fitness Tracking",
//         "Sleep Monitoring",
//         "SpO2",
//         "Built-in GPS",
//       ],
//       price: 249.99,
//     },
//     {
//       brand: "Fitbit",
//       model: "Sense",
//       features: ["Stress Management", "ECG", "Sleep Score", "Built-in GPS"],
//       price: 299.95,
//     },
//     {
//       brand: "Garmin",
//       model: "Forerunner 945",
//       features: ["Advanced Running Dynamics", "Music Streaming", "Garmin Pay"],
//       price: 599.99,
//     },
//   ];


  return (
    <div>
      {
        watches.map(watch=><Watch key={watch.id} watch={watch}></Watch>)
      }
    </div>
  )
}

export default App
