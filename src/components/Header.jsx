export default function Header() {
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
            HOME
          </li>
          <li className="transition-colors hover:text-yellow-500 active:text-black">
            MEN
          </li>
          <li className="transition-colors hover:text-yellow-500 active:text-black">
            WOMEN
          </li>
          <li className="transition-colors hover:text-yellow-500 active:text-black">
            JEWELERY
          </li>
        </ul>
      </nav>

      <button>
        <span className="transition-colors cursor-pointer material-symbols-outlined hover:text-yellow-500">
          shopping_cart
        </span>
      </button>
    </header>
  );
}
