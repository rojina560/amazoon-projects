import { useContext } from "react";
import { AssetContext, MoneyContext, PayContext } from "../Grandpa/Grandpa";

const Special = ({ asset }) => {
    const gift = useContext(AssetContext);
    const pay = useContext(PayContext)
    const [money] = useContext(MoneyContext)
    return (
        <div>
            <h2>Special</h2>
            <p>has:{asset}</p>
            <p>also has:{gift}</p>
            <p>total price: {money}</p>
            <p> her wish:{pay}</p>
        </div>
    );
};

export default Special;