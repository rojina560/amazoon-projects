import Cousin from "../Cousin/Cousin";
import Husband from "../Husband/Husband";

const Uncle = ({asset}) => {
    return (
        <div>
            <h2>uncle</h2>
            <section className="flex">
                <Cousin name={'rafsan'} asset={asset}></Cousin>
                <Cousin name={'sohana'} asset={asset}></Cousin>
                <Husband>
                    <h1></h1>
                </Husband>
            </section>
        </div>
    );
};

export default Uncle;