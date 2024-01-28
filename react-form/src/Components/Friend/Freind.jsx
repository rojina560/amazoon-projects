import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

const Freind = () => {
    const gift = useContext(AssetContext);
    return (
        <div>
            <h2>friend</h2>
            <p>has:{gift}</p>
        </div>
    );
};

export default Freind;