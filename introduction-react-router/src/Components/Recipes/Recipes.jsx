import { useLoaderData } from "react-router-dom";

const Recipes = () => {
    const recipes = useLoaderData();
    
    return (
      <div>
        <h1>recipes: {recipes.length}</h1>
      </div>
    );
};

export default Recipes;