/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import'./Cart.css'
const Cart = ({ selectActors, totalCost, remaining }) => {
  console.log(selectActors);
  return (
    <div>
      <h1 className="text-white">Total actors:{selectActors.length}</h1>
          <h2>Total Reamining :{remaining}</h2>
          <h2>Total Cost :{totalCost}</h2>
      {selectActors.map((actor) => (
        <li key={actor.id}>{actor.name}</li>
      ))}
    </div>
  );
};

export default Cart;