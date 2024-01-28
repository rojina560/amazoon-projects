import PriceOption from "../PriceOption/PriceOption";



const PriceOptions = () => {
  
 const PriceOptions =  [
    {
      "id": 1,
      "name": "Basic Membership",
      "description": "Access to basic gym facilities",
      "price": 29.99,
      "currency": "USD",
      "duration": "per month"
    },
    {
      "id": 2,
      "name": "Premium Membership",
      "description": "Access to premium gym facilities and classes",
      "price": 49.99,
      "currency": "USD",
      "duration": "per month"
    },
    {
      "id": 3,
      "name": "Annual Membership",
      "description": "12 months of unlimited gym access",
      "price": 499.99,
      "currency": "USD",
      "duration": "per year"
    }
    
  ];


  return (
    <div className="my-14">
      <h1 className="mb-8 text-7xl text-blue-500"> Best price in the town </h1>
      <div className="grid md:grid-cols-3 gap-4 ">
        {PriceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;