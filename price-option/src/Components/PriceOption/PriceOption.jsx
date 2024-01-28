


const PriceOption = ({ option }) => {
    const { name, price, description } = option;
    return (
      <div className=" text-white bg-sky-500 p-4 rounded-md space-y-4 ">
        <h2 className="text-5xl">
          {price}
          <span className="text-2xl">/Mon</span>
        </h2>

        <h1 className="text-3xl">{name}</h1>

        <h2>{description}</h2>
        <button className="w-full p-3 bg-green-600">Buy now</button>
      </div>
    );
};

export default PriceOption;