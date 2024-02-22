import { Link } from "react-router-dom";


const getCurrentDate = Date.now();

export default function Cart({cartedItems, deleteCart}) {
 
  // const [loading, setLoading] = useState(true);

  /* local cart */
  
  
  /* remote cart */
  // useEffect(() => {
  //   const getCarts = async () => {
  //     try {
  //       //get all cartedItems data for id:1 user
  //       const cartRes = await fetch("https://fakestoreapi.com/carts/user/1");
  //       const cartData = await cartRes.json();
  //       //filter out only the needed data
  //       //only gets the products(productId and quantity)
  //       const filteredCartData = cartData.map((cart) => cart.products).flat();

  //       //get all latest products
  //       const productRes = await fetch("https://fakestoreapi.com/products");
  //       const productData = await productRes.json();

        
  //       //get all cartedItemsData based on id in the filteredCartData that matched on productData
  //       const cartedItemsData = [];

  //       for (
  //         let outerIndex = 0;
  //         outerIndex < filteredCartData.length;
  //         outerIndex++
  //       ) {
  //         for (
  //           let innerIndex = 0;
  //           innerIndex < productData.length;
  //           innerIndex++
  //         ) {
  //           const cartedProduct = filteredCartData[outerIndex];
  //           const product = productData[innerIndex];

  //           if (cartedProduct.productId === product.id) {
  //             cartedItemsData.push(product);
  //           }
  //         }
  //       }
    
  //       setCartedItems(cartedItemsData);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //     finally {
  //       setLoading(false);
  //     }
  //   };
  //   getCarts();
  // }, []);


  // const deleteCart = async (id) => {
  //   // fetch(`https://fakestoreapi.com/carts/${id}`,{
  //   //         method:"DELETE"
  //   //     })
  //   //         .then(res=>res.json())
  //   //         .then(json=>console.log(json))
  //   try {
  //     const url = `https://fakestoreapi.com/carts/${id}`;
  //     fetch(url,  {method: "DELETE"});
  //   }
  //   catch(error) {
  //     console.log(error)
  //   }
  // }

  /* UI */
  const cartedItemList = cartedItems.map((item, index) => (
    <ProductCard
      key={item.id + item.title + getCurrentDate + index}
      image={item.image}
      title={item.title}
      category={item.category}
      price={item.price}
      onClick={() => deleteCart(item.id)}
    />
  ));


  return (
    <div className="flex flex-col w-full h-screen pt-16">
      <section className="w-full py-10 border-b h-max">
        <div className="flex justify-between gap-x-10 px-4 xl:gap-x-24 lg:w-[80%] lg:max-w-6xl lg:m-auto">
          <BreadCrumb
            order="1"
            title="Shopping Cart"
            desc="Manage your item list"
            active={true}
          />
          <BreadCrumb
            order="2"
            title="Delivery & Payment"
            desc="Enter your address & payment type"
            active={false}
          />

          <BreadCrumb
            order="3"
            title="Complete Order"
            desc="Review and submit your order"
            active={false}
          />
        </div>
      </section>

      <section className="flex-1 py-6 overflow-auto bg-white">
        <div className="px-4 xl:gap-x-24 lg:w-[80%] lg:max-w-6xl lg:m-auto">
          {/* {loading ? <div className="absolute top-20 right-20">loading...</div> : cartedItemList} */}
          {cartedItemList}
        </div>
      </section>

      <div className="px-4 py-6 border-t">
        <div className="flex items-center justify-between lg:w-[80%] lg:max-w-6xl lg:m-auto">
          <button className="text-xs font-bold text-yellow-500">
            <Link to="/">ADD MORE ITEMS</Link>
          </button>

          <div className="flex items-center gap-x-10">
            <div className="text-gray-500">
              <p className="text-sm ">Sub Total:</p>
              <p>$ 866.00</p>
            </div>

            <div className="text-gray-500">
              <p className="text-sm ">Shipping:</p>
              <p>$ 20.00</p>
            </div>

            <div>
              <p className="text-sm font-semibold">Total:</p>
              <p className="font-semibold">$ 886.00</p>
            </div>

            <button className="px-5 py-2 font-semibold text-white transition-all bg-yellow-600 rounded-full text-2xs active:scale-95 hover:bg-yellow-600/80">
              PROCEED
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function BreadCrumb({ order, title, desc, active }) {
  return (
    <div
      className={`${
        active ? "text-yellow-500 " : "text-gray-400 opacity-50"
      } w-full justify-between flex items-center`}
    >
      <div className="flex items-center gap-x-4">
        <span className="text-4xl font-thin">{order}</span>
        <div>
          <h2>{title}</h2>
          <p className="text-gray-500 text-2xs">{desc}</p>
        </div>
      </div>
      <span className="material-symbols-outlined">arrow_forward_ios</span>
    </div>
  );
}

function ProductCard({ onClick, image, title, category, price }) {
  return (
    <div className="flex items-center gap-6 py-5 text-gray-400 border-b">
      <div className="h-12 border-2 border-yellow-400 w-14">
        <img className="object-contain w-full h-full" src={image} />
      </div>

      <div className="flex flex-col flex-1">
        <span className="font-bold text-gray-900 ">{title}</span>
        <span className="font-semibold text-2xs">{category}</span>
      </div>

      <p className="text-gray-700">${" " + price}</p>
      <span className="ursor-pointer material-symbols-outlined">Info</span>
      <button onClick={onClick}><span className="cursor-pointer material-symbols-outlined">Delete</span></button>
    </div>
  );
}
