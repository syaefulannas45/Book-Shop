import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Detail = () => {
  const { api } = useContext(GlobalContext);
  const { data } = api;

  console.log(data)
  return (
    <div className="container mt-20 flex w-full p-12">
      <div className="flex w-full flex-col">
        <div className="text-2xl text-slate-700 lg:text-5xl">
          Berikut Buku Novel Terbaru <br />
          <span className="text-sky-500"> di Toko JESH BOOK!</span>
        </div>
        <div className="mt-5 flex">
          <input type="text" className="mr-4 rounded-md border bg-slate-400 p-2 placeholder:italic placeholder:text-white" placeholder="Cari Buku" />
          <div className="flex w-[80px] items-center justify-center rounded-md bg-green-500 text-white">
            <a href="#">Cari</a>
          </div>
        </div>
        <div className="mt-5 h-[2px] w-full bg-sky-500"></div>
        <div className="mt-12 flex flex-col flex-wrap justify-around lg:flex-row">
          {data.map((res) => (
            <div className="mr-10 mb-5 flex w-full flex-col rounded-md shadow-lg lg:w-1/4">
              <div className="mx-auto flex w-full items-center justify-center bg-sky-300">
                <img src={require(`../images/${res.image}`)} alt="novel" className="h[240px] w-[240px]" />
              </div>
              <div className="p-5">
                <div>
                  <h1 className="font-bold text-slate-700">
                    Judul Novel : <span className=" font-normal text-slate-600">{res.judul}</span>
                  </h1>
                  <h1 className="font-bold text-slate-700">
                    Penulis : <span className=" font-normal text-slate-600">{res.penulis}</span>
                  </h1>
                  <h1 className="font-bold text-slate-700">
                    Rate : <i class="fa-solid fa-star text-yellow-500"></i>
                    <i class="fa-solid fa-star text-yellow-500"></i>
                    <i class="fa-solid fa-star text-yellow-500"></i>
                    <i class="fa-solid fa-star text-yellow-500"></i>
                    <i class="fa-solid fa-star bg-gradient-to-r from-yellow-500 to-white bg-clip-text text-transparent"></i>
                  </h1>
                </div>
                <div className="mt-1">
                  <p className="mb-2 italic">Sinopsis</p>
                  <p>{res.sinopsis}</p>
                </div>
                <div className="mt-5 flex justify-end">
                  <div className="flex h-10 items-center rounded-md bg-green-500 p-2 text-white">
                    <i class="fa-solid fa-cart-shopping"></i> Beli Buku
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Detail;
