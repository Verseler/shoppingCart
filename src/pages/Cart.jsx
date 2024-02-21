import { Link } from "react-router-dom";

export default function Cart() {
  function breadCrumb(order, title, desc, active) {
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

  return (
    <div className="flex flex-col w-full h-screen pt-16">
      <section className="w-full py-10 border-b h-max">
        <div className="flex justify-between gap-x-10 xl:gap-x-24 lg:w-[80%] lg:max-w-6xl lg:m-auto">
          {breadCrumb("1", "Shopping Cart", "Manage your item list", true)}
          {breadCrumb(
            "2",
            "Delivery & Payment",
            "Enter your address & payment type",
            false
          )}
          {breadCrumb(
            "3",
            "Complete Order",
            "Review and submit your order",
            false
          )}
        </div>
      </section>

      <section className="flex-1 py-6 overflow-auto bg-white">
        <div className="xl:gap-x-24 lg:w-[80%] lg:max-w-6xl lg:m-auto">
          <ProductCard
            image=""
            title="Jimmy Choo Beige heels"
            shop="JIMMY CHOO"
            price="310.00"
          />
          <ProductCard
            image=""
            title="Jimmy Choo Beige heels"
            shop="JIMMY CHOO"
            price="310.00"
          />
        </div>
      </section>

      <div className="py-6 border-t">
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

function ProductCard({ image, title, shop, price }) {
  return (
    <div className="flex items-center gap-6 py-5 text-gray-400 border-b">
      <div className="h-12 border-2 border-yellow-400 w-14">
        <img src={image} />
      </div>

      <div className="flex flex-col flex-1">
        <span className="font-bold text-gray-900 ">{title}</span>
        <span className="font-semibold text-2xs">{shop}</span>
      </div>

      <p className="text-gray-700">${" " + price}</p>
      <span className="ursor-pointer material-symbols-outlined">Info</span>
      <span className="cursor-pointer material-symbols-outlined">Delete</span>
    </div>
  );
}
