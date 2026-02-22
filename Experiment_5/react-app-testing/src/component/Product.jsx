import { useEffect, useState } from "react";
import { fetchProduct } from "../api/productAPI";

const Product = () => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetchProduct().then((data) => {
            setProduct(data);
        });
    }, []);

    if (!product) return <div>Loading...</div>;

    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.price} {product.currency}</p>
        </div>
    );
};

export default Product;
