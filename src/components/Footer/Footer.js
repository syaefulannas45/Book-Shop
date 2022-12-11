import React from "react";

const Footer = () => {
  return (
    <div className="container mt-10 w-full bg-slate-500 p-10">
      <div className="mx-auto w-full">
        <div>
          <h1 className="mb-3 text-slate-100 lg:text-6xl">Jesh Book</h1>
          <p className="mb-3 text-slate-200 lg:text-2xl">Hubungi kami</p>
          <p className="text-slate-200">jeshbook@gmail.com</p>
          <p className="text-slate-200 mb-3">Cirebon, Jawa Barat, Indonesia</p>
        </div>
        <div className="w-full bg-sky-400 h-[1px]"></div>
        <div className="mx-auto w-full text-center mt-5 text-slate-200">
          <p>All Right Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
