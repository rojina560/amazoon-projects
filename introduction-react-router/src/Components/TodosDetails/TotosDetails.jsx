import { useLoaderData } from "react-router-dom";


const TotosDetails = () => {
    const todo = useLoaderData;
    const {userId, id, title, complate } = todo;

    return (
      <div>
        <h2>id:{id}</h2>
        <h3>title:{title}</h3>
            <h2>userId{userId}</h2>
            <h2>complate{complate}</h2>
      </div>
    );
};

export default TotosDetails;