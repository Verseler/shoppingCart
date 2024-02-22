import { useState, useEffect } from "react";
import ProductTable from "../components/ProductTable";

export default function Home({addCart}) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const productSize = products.length;
  
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const url = "https://fakestoreapi.com/products";
      const response = await fetch(url);
      const data = await response.json();
    
      setProducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  /* UI */
  const productSizeResult = (
    <p className="text-zinc-400">
      <span className="text-yellow-500">{productSize}</span> results
    </p>
  );

  if (loading) return <div className="absolute right-20 top-20">Loading...</div>;

  return (
    <div className="relative px-4 xl:max-w-[95%] xl:m-auto">
      <main className="py-20 m-auto w-max">
        <div className="mb-4">
          <h1 className="text-4xl font-extrabold">Luxury Ukay</h1>
          {productSizeResult}
        </div>
        <ProductTable products={products} addCart={addCart} />
      </main>
    </div>
  );
}
