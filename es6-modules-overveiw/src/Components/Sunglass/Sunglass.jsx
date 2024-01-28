
import { add, multiply,vag as divite } from '../../Utilitis/calculate';
import Watch from '../Watch/Watch';
import './Sunglass.css'
const Sunglass = () => {
    const first = 10;
    const second = 20;
    const sum = add(first, second)
    const mult = multiply(first, second)
    const vaag = divite(first,second)
      
  
    return (
        <div>
            <Watch></Watch>
        </div>
    );
};

export default Sunglass;