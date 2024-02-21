import { useState, useEffect } from "react";

export default function Home() {
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
      // console.log(products)
      setProducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  /* UI */
  const productsTable = products.map((product) => (
    <div className="border border-zinc-100 w-72 h-max" key={product.id}>
      <div>
        <div className="flex items-center justify-between p-2">
          <p className="text-sm font-bold">${product.price}</p>
          <button>
            {" "}
            <span className="transition-colors cursor-pointer text-zinc-400 material-symbols-outlined active:text-yellow-500">
              favorite
            </span>
          </button>
        </div>
        
        <div className="w-full h-56 ">
          <img className="object-contain w-3/4 m-auto h-3/4" src={product.image} />
        </div>
      </div>

      <div className="flex items-center justify-between px-4 border-t-2 border-t-zinc-100 gap-x-6 h-14">
        <p className="text-xs font-bold line-clamp-2">{product.title}</p>
        <button>
          <span className="text-yellow-500 transition-colors cursor-pointer material-symbols-outlined active:text-black">
            shopping_cart
          </span>
        </button>
      </div>
    </div>
  ));

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
        <div className="grid grid-cols-2 border border-zinc-100 md:grid-cols-3 xl:grid-cols-4">
          {productsTable}
        </div>
      </main>
    </div>
  );
}
