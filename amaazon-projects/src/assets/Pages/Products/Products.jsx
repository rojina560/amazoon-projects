import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const Products = () => {
    const { products } = useLoaderData();
    console.log(products)
    return (
        <div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    products.map(product=><Product key={product.id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;