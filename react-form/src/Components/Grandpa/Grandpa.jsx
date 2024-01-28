import { createContext, useState } from "react";
import Aunt from "../Aunt/Aunt";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css'

export const AssetContext = createContext('');
export const PayContext = createContext("");
export const MoneyContext = createContext(1000);

const Grandpa = () => {
  const[money,setMoney] = useState(1000)
   const asset = 'diamond'
    return (
      <div className="grandpa">
        <h2>grandpa</h2>
        <p>{money}</p>
        <MoneyContext.Provider value={[money, setMoney]}>
          <AssetContext.Provider value="gold">
            <PayContext.Provider value ='love'>
              <section className="flex">
                <Dad asset={asset}></Dad>
                <Aunt asset={asset}></Aunt>
                <Uncle asset={asset}></Uncle>
              </section>
            </PayContext.Provider>
          </AssetContext.Provider>
        </MoneyContext.Provider>
      </div>
    );
};

export default Grandpa;
/**
 * 1.create a context and export it
 * 2.Add provider for the context wiith a value.value code be anything
 * 3. useContext to access value in the context API
 */