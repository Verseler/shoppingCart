export default function ProductTable({ products, addCart }) {
  return (
    <div className="grid grid-cols-2 border border-zinc-100 md:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
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
              <img
                className="object-contain w-3/4 m-auto h-3/4"
                src={product.image}
              />
            </div>
          </div>

          <div className="flex items-center justify-between px-4 border-t-2 border-t-zinc-100 gap-x-6 h-14">
            <p className="text-xs font-bold line-clamp-2">{product.title}</p>
            <button onClick={() => addCart(product)}>
              <span className="text-yellow-500 transition-colors cursor-pointer material-symbols-outlined active:text-black">
                shopping_cart
              </span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
