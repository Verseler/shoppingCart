import { Link } from "react-router-dom";

export default function Header({ cartedItemCount }) {
  const cartCount = (
    <div className="absolute bg-transparent bottom-5 left-4">
      {cartedItemCount?.length < 1 ?? (
        <p className="flex items-center justify-center w-4 h-4 pt-0.5 text-white bg-yellow-500 rounded-full text-2xs">
          {cartedItemCount}{" "}
        </p>
      )}
    </div>
  );

  return (
    <header className="flex items-center  justify-between w-full px-4 h-16 xl:max-w-[95%] xl:m-auto">
      <div className="tracking-wider text-center">
        <p className="text-2xl">
          <span className="font-bold">IN</span>SELLER
        </p>
        <p className="text-2xs tracking-[3px]">LUXURY SHOPPING</p>
      </div>

      <nav>
        <ul className="flex items-center text-sm font-bold cursor-pointer gap-x-8">
          <li className="transition-colors hover:text-yellow-500 active:text-black">
            <Link to="/">HOME</Link>
          </li>
          <li className="transition-colors hover:text-yellow-500 active:text-black">
            <Link to="men">MEN</Link>
          </li>
          <li className="transition-colors hover:text-yellow-500 active:text-black">
            <Link to="women"> WOMEN</Link>
          </li>
          <li className="transition-colors hover:text-yellow-500 active:text-black">
            <Link to="jewerly"> JEWELERY</Link>
          </li>
        </ul>
      </nav>

      <button className="relative">
        {cartCount}
        <span className="transition-colors cursor-pointer material-symbols-outlined hover:text-yellow-500">
          shopping_cart
        </span>
      </button>
    </header>
  );
}
