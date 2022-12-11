import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="container lg:mt-36 bg-blue-300 p-5">
      <div className="mb-20">
        <h1 className="mt-12 text-center  font-bold text-blue-600 lg:text-5xl text-2xl">Kategori Buku</h1> <br />
        <p className="text-center text-slate-500">Berikut adalah beberapa jenis buku yang tersedia di Toko Jesh Book</p>
      </div>
      <div className="mx-auto mb-10 flex w-full flex-wrap lg:justify-around">
        <div className="mr-5 mb-10 rounded-lg bg-white shadow-lg lg:w-[30%]">
          <div className="bg-slate-200">
            <img src={require("../../images/novel.png")} alt="category" className="flex h-64 w-full justify-center " />
          </div>
          <div className="p-5">
            <h1 className="mb-5 font-bold text-blue-600 lg:text-lg text-2xl">Apa itu Novel ?</h1>
            <p className="text-md text-slate-600">
              Novel adalah sebuah bentuk karya sastra yang menceritakan tentang kehidupan dan peristiwa-peristiwa yang terjadi di dalamnya. Novel biasanya berisi karakter-karakter yang memiliki tujuan dan masalah yang harus
              diselesaikan. Novel biasanya berisi dialog, deskripsi, dan narasi yang menggambarkan peristiwa-peristiwa yang terjadi.
            </p>
            <div className=" mt-5 w-1/4 rounded-md bg-sky-500 p-1 text-center text-white">
              <a href="#">Lihat buku</a>
            </div>
          </div>
        </div>
        <div className="mr-5 mb-10 rounded-lg bg-white shadow-lg lg:w-[30%]">
          <div className="bg-slate-200 ">
            <img src={require("../../images/comic.png")} alt="category" className="flex h-64 w-full justify-center" />
          </div>
          <div className="p-5">
            <h1 className="mb-5 font-bold text-blue-600 lg:text-lg text-2xl">Apa itu Komik ?</h1>
            <p className="text-md text-slate-600">
              Komik adalah sebuah media yang menggabungkan teks dan gambar untuk menceritakan sebuah cerita. Komik biasanya diterbitkan dalam bentuk majalah atau buku, dan juga dapat ditemukan di internet. Komik biasanya menceritakan
              kisah fiksi, tetapi juga dapat berisi cerita non-fiksi, seperti biografi dan komik edukasi.
            </p>
            <div className=" mt-5 w-1/4 rounded-md bg-sky-500 p-1 text-center text-white">
              <Link to={"/detail"}>Lihat Buku</Link>
            </div>
          </div>
        </div>
        <div className="mr-5 mb-10 rounded-lg bg-white shadow-lg lg:w-[30%]">
          <div className="bg-slate-200">
            <img src={require("../../images/majalah.png")} alt="category" className="flex h-64 w-full justify-center" />
          </div>
          <div className="p-5">
            <h1 className="mb-5 font-bold text-blue-600 lg:text-lg text-2xl">Apa itu Majalah ?</h1>
            <p className="text-md  text-slate-600">
              Majalah adalah sebuah publikasi yang diterbitkan secara berkala, biasanya setiap minggu, dua minggu, bulanan atau triwulanan. Majalah menyajikan berbagai informasi, seperti berita, artikel, kolom, iklan, dan lain-lain.
              Majalah juga dapat mencakup berbagai topik seperti politik, hiburan, olahraga, teknologi, dan lain-lain.
            </p>
            <div className=" mt-5 w-1/4 rounded-md bg-sky-500 p-1 text-center text-white">
              <a href="#">Lihat buku</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
