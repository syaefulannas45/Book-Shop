import React from "react";

const HeroSection = () => {
  return (
    <div className="container mt-32 flex w-[90%] flex-col lg:mt-48 lg:flex-row">
      <div className="flex flex-col">
        <div className="mb-5 text-3xl font-bold text-slate-700 lg:text-5xl">
          Jesh Book adalah
          <br />
          <span className="text-sky-500">Toko yang menjual berbagai macam buku</span>
        </div>
        <div className="mt-1 lg:w-3/4 text-slate-600 lg:text-md">
          Kami menyediakan berbagai jenis buku mulai dari novel, komik, majalah, ensiklopedia, dan buku-buku lainnya. Kami juga menyediakan buku-buku yang berhubungan dengan berbagai topik, seperti sains, teknologi, seni, budaya, dan
          lainnya
        </div>
        <div className="mt-5 lg:mt-12 flex lg:w-2/5 justify-start">
          <div className="mr-2 flex h-10 items-center rounded-md bg-sky-500 p-4 text-white">
            <a href="#">Get Started</a>
          </div>
          <div className="flex h-10 items-center rounded-md bg-green-500 p-4 text-white">
            <a href="">
              <i class="fa-solid fa-shop mr-3"></i>Go Shop
            </a>
          </div>
        </div>
        <div className="mt-5 lg:mt-10 flex  lg:w-3/4 justify-start ">
          <div className="">
            <input type="text" placeholder="Enter your email" className="mr-4 h-10 rounded-md bg-slate-300 p-2 placeholder:text-slate-500 lg:w-56" />
          </div>
          <div className="flex items-center rounded-md bg-sky-400 lg:p-2 text-sm text-white">
            <a href="#" className="text-center">Start Get Discount!</a>
          </div>
        </div>
        <div className="mt-2">
          <p className="text-slate-700 text-sm">
            Segera daftar untuk member baru dan dapatkan diskon 50%  di Toko buku Jesh Book !
          </p>
        </div>
      </div>
      <div>
        <img src={require("../../images/foto.png")} width={1200} height={500} alt="hero" />
      </div>
    </div>
  );
};

export default HeroSection;
