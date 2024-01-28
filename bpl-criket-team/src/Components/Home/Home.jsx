/* eslint-disable react/jsx-key */

import { useEffect } from 'react';
import './Home.css'
import { useState } from 'react';
import Cart from '../Cart/Cart';

const Home = () => {
  const [allActors, setActors] = useState([]);
  const [selectActors, setSelectActors] = useState([]);
  const [remaining, setRemaining] = useState(0);
  const [ totalCost,setTotalCost] =useState(0)
 
  useEffect(() => {
    fetch("data.json")
      .then(res => res.json())
      .then(data => setActors(data))
  }, []);
  const handleSelectAll = (actor) => {
    const isExist = selectActors.find(item => item.id === actor.id);
    let count = actor.salary;
    if (isExist) {
      return alert('already booked')
    }
    else {
      selectActors.forEach(item => {
        count = count + item.salary
      })
      const totalRemaing = 20000 - count;
      if (count>20000) { 
       return alert('taka sesh')
      }
      setTotalCost(count)
      setRemaining(totalRemaing)

       setSelectActors([...selectActors, actor]);
    }
  
  }
 
  console.log(selectActors)

    return (
      <div className="container">
        <div className="home-container">
          <div className="cart-container">
            {allActors.map((actor) => (
              <div key={actor.id} className="cart">
                <div className="cart-img">
                  <img className="photo" src={actor.image} alt="" />
                </div>
                <h2>{actor.name}</h2>
                <p>
                  <small>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Modi, doloribus!
                  </small>
                </p>
                <div className="info">
                  <p>salary{actor.salary}</p>
                  <p>{actor.role}</p>
                </div>
                <button
                  className="text-white bg-red-600 "
                  onClick={() => handleSelectAll(actor)}
                >
                  select
                </button>
              </div>
            ))}
            ;
          </div>

          <div>
            <Cart
              selectActors={selectActors}
              remaining={remaining}
              totalCost={totalCost}
            ></Cart>
          </div>
        </div>
      </div>
    );
};

export default Home;