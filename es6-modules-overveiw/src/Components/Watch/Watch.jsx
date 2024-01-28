/* eslint-disable react/prop-types */
import'./Warch.css'
const Watch = ({ watch }) => {
    const { name, price, features,brand} = watch;
    return (
        <div>
            <h2>watches:{name}</h2>
            <h2>price:{price}</h2>
            <h3>features:{features}</h3>
            <h1>brand:{brand}</h1>
        </div>
    );
};

export default Watch;