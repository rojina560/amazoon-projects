import { useLoaderData } from "react-router-dom";
import Meal from "../Meal/Meal";

const MealBds = () => {
  const meals = useLoaderData();
 console.log(meals);
  return (
    <div>
      <h1>meals:{meals.length}</h1>
      <div>
        {meals.map((meal) => (
          <Meal key={meal.id} meal={meal}></Meal>
        ))}
      </div>
    </div>
  );
};

export default MealBds;
