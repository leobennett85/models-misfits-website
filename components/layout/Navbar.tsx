export default function Navbar() {
  return (
    <nav
  className="
    sticky
    top-0
    z-50
    border-b
    border-[#e6ddd1]
    bg-[#f8f4ef]
  "
>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        <h2 className="text-2xl font-bold tracking-wide">
          Models + Misfits
        </h2>

        <ul className="hidden gap-8 md:flex">
          <li className="cursor-pointer hover:text-[#c8a45d]">
            Home
          </li>

          <li className="cursor-pointer hover:text-[#c8a45d]">
            Services
          </li>

          <li className="cursor-pointer hover:text-[#c8a45d]">
            Bridal
          </li>

          <li className="cursor-pointer hover:text-[#c8a45d]">
            Gallery
          </li>

          <li className="cursor-pointer hover:text-[#c8a45d]">
            Products
          </li>

          <li className="cursor-pointer hover:text-[#c8a45d]">
            Contact
          </li>
        </ul>

        <button
          className="
            rounded-md
            bg-[#c8a45d]
            px-5
            py-2
            text-white
            transition
            hover:opacity-90
          "
        >
          Book Now
        </button>

      </div>
    </nav>
  );
}