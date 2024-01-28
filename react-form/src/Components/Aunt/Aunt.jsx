import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../Grandpa/Grandpa";

const Aunt = ({ asset }) => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h2>Aunt</h2>
            <Cousin name={'rojina akter'} asset={asset}></Cousin>
            <p>money:{money}</p>
            <button onClick={() => setMoney(money + 1000)}>Add 1000 tk</button>
            <button onClick={() => setMoney(money-100)}> reduce price</button>
        </div>
    );
};

export default Aunt;