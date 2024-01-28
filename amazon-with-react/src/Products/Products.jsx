import { useLoaderData } from "react-router-dom";
import ProductCart from "./ProductCart";

const Products = () => {
    const { products } = useLoaderData();
    console.log(products)
    return (
      <div className="p-4">
        <h1> product page</h1>
        <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-3">
          {products.map((product) => (
            <ProductCart key={product.id} product={product}></ProductCart>
          ))}
        </div>
      </div>
    );
};

export default Products;