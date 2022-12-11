import React from "react";

const Navbar = () => {
  const toggle = () => {
    const navMenu = document.querySelector("#nav-menu");
    const toggle = document.querySelector("#toggle");
    toggle.classList.toggle("toggle-active");
    navMenu.classList.toggle("hidden");
  };
  const lampToggle = () => {
    const lampToggle = document.querySelector("#lamp-toggle");
    const html = document.querySelector("html");
    if (lampToggle.checked) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  };
  return (
    <div id="header" className="absolute top-0 left-0 z-10 mt-4 flex w-full items-center bg-transparent shadow-md p-2">
      <div className="container">
        <div className="relative flex items-center justify-between">
          <div className="px-4">
            <i class="fa-solid fa-book-open text-2xl">
              {" "}
              J ESH <span className="text-sky-500">BOOK</span>
            </i>
          </div>
          <div className="flex items-center px-4">
            <button onClick={toggle} id="toggle" name="toggle" className="absolute right-4 block lg:hidden">
              <span className="toggle-line origin-top-left transition duration-300 ease-in-out dark:bg-white "></span>
              <span className="toggle-line transition duration-300 ease-in-out dark:bg-white"></span>
              <span className="toggle-line origin-bottom-left transition duration-300  ease-in-out dark:bg-white"></span>
            </button>
            <nav
              id="nav-menu"
              className="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg dark:bg-sky-500 lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none dark:lg:bg-transparent"
            >
              <ul className="block lg:flex">
                <div className="flex lg:mr-[550px]">
                  <li className="group">
                    <a href="#" className="mx-8 flex py-2 text-base text-slate-800 group-hover:text-sky-500 dark:text-white dark:hover:text-yellow-400">
                      Beranda
                    </a>
                  </li>
                  <li className="group">
                    <a href="#about" className="mx-8 flex py-2 text-base text-slate-800 group-hover:text-sky-500 dark:text-white dark:hover:text-yellow-400">
                      Diskon
                    </a>
                  </li>
                  <li className="group">
                    <a href="#" className="mx-8 flex py-2 text-base text-slate-800 group-hover:text-sky-500 dark:text-white dark:hover:text-yellow-400">
                      Produk
                    </a>
                  </li>
                </div>

                <div className="flex">
                  <li className="group rounded-md bg-sky-500">
                    <a href="#" className="mx-8 flex py-2 text-base text-white group-hover:text-slate-500 dark:text-white dark:hover:text-yellow-400">
                      Sign In
                    </a>
                  </li>
                  <li className="mx-8 flex items-center">
                    <div className="flex">
                      <i class="fa-solid fa-sun text-2xl text-yellow-500"></i>

                      <input type="checkbox" className="hidden" id="lamp-toggle" onClick={lampToggle} />
                      <label for="lamp-toggle">
                        <div className="my-[5px] mx-2 flex h-5 w-10 cursor-pointer items-center  rounded-full bg-slate-500">
                          <div className="toggle-circle h-4 w-4 rounded-full bg-white transition duration-300 ease-in-out"></div>
                        </div>
                      </label>
                      <i class="fa-solid fa-moon text-2xl text-slate-700 dark:text-yellow-500"></i>
                    </div>
                  </li>
                </div>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
