import Freind from "../Friend/Freind";
import Special from "../Special/Special";

const Cousin = ({name , asset}) => {
    return (
      <div>
        <h2>cousin</h2>
        <h2>{name}</h2>
            <section>{asset && <Special asset={asset}></Special>}
                {name === 'rojina akter' && <Freind></Freind>}
            </section>
      </div>
    );
};

export default Cousin;