import Logo from "../assets/digital_ist.svg";

function Header() {
  return (
    <header className="bg-stone-50 border-b border-stone-100 ">
      <div className="container m-auto flex sm:flex-row flex-col items-center min-h-24 gap-3 p-6 sm:p-0">
        <img className="w-12" src={Logo} alt="Logo" />
        <span className="md:ml-3 sm:ml-2 text-2xl font-bold">Pay Split</span>
        <span className="sm:border-l sm:ml-2 sm:pl-4 text-center sm:text-left">
          helps you keep track of who paid what
        </span>
      </div>
    </header>
  );
}

export default Header;
