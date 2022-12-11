import React from "react";

const Detail = () => {
  return (
    <div className="mt-20 flex p-12 container w-full">
      <div className="flex flex-col w-full">
        <div className="text-slate-700 lg:text-5xl text-2xl">
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
        <div className="mt-12 flex lg:flex-row flex-wrap flex-col justify-around">
          <div className="mr-10 flex w-full flex-col rounded-md shadow-lg mb-5 lg:w-1/4">
            <div className="mx-auto flex w-full items-center justify-center bg-sky-300">
              <img src={require("../images/novel1.png")} alt="novel" className="h[240px] w-[240px]" />
            </div>
            <div className="p-5">
              <div>
                <h1 className="font-bold text-slate-700">
                  Judul Novel : <span className=" font-normal text-slate-600">Ayat-ayat Cinta</span>
                </h1>
                <h1 className="font-bold text-slate-700">
                  Penulis : <span className=" font-normal text-slate-600">A Habiburrahman El Shirazy</span>
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
                <p>Mengisahkan tentang seorang pemuda indonesia yang bernama Fahri. Berasal dari keluarga sederhana dan sedang berkuliah S2 di universitas Al-Azhar mesir.</p>
              </div>
              <div className="mt-5 flex justify-end">
                <div className="flex h-10 items-center rounded-md bg-green-500 p-2 text-white">
                  <i class="fa-solid fa-cart-shopping"></i> Beli Buku
                </div>
              </div>
            </div>
          </div>
          <div className="mr-10 flex w-full flex-col rounded-md shadow-lg mb-5 lg:w-1/4">
            <div className="mx-auto flex w-full items-center justify-center bg-sky-300">
              <img src={require("../images/novel2.png")} alt="novel" className="h[240px] w-[240px]" />
            </div>
            <div className="p-5">
              <div>
                <h1 className="font-bold text-slate-700">
                  Judul Novel : <span className=" font-normal text-slate-600">Laskar Pelangi</span>
                </h1>
                <h1 className="font-bold text-slate-700">
                  Penulis : <span className=" font-normal text-slate-600">Andrea Hirata</span>
                </h1>
                <h1 className="font-bold text-slate-700">
                  Rate : <i class="fa-solid fa-star text-yellow-500"></i>
                  <i class="fa-solid fa-star text-yellow-500"></i>
                  <i class="fa-solid fa-star text-yellow-500"></i>
                  <i class="fa-solid fa-star text-yellow-500"></i>
                  <i class="fa-solid fa-star text-yellow-500"></i>
                </h1>
              </div>
              <div className="mt-1">
                <p className="mb-2 italic">Sinopsis</p>
                <p>Mengisahkan kehidupan 10 anak dari keluarga miskin yang bersekolah (SD dan SMP) di sebuah sekolah Muhammadiyah di Belitung yang penuh dengan keterbatasan</p>
              </div>
              <div className="mt-5 flex justify-end">
                <div className="flex h-10 items-center rounded-md bg-green-500 p-2 text-white">
                  <i class="fa-solid fa-cart-shopping"></i> Beli Buku
                </div>
              </div>
            </div>
          </div>
          <div className=" flex w-full flex-col rounded-md shadow-lg mb-5 lg:w-1/4">
            <div className="mx-auto flex w-full items-center justify-center bg-sky-300">
              <img src={require("../images/novel3.png")} alt="novel" className="h[240px] w-[240px]" />
            </div>
            <div className="p-5">
              <div>
                <h1 className="font-bold text-slate-700">
                  Judul Novel : <span className=" font-normal text-slate-600">Perahu Kertas</span>
                </h1>
                <h1 className="font-bold text-slate-700">
                  Penulis : <span className=" font-normal text-slate-600">Dwi Lestari</span>
                </h1>
                <h1 className="font-bold text-slate-700">
                  Rate : <i class="fa-solid fa-star text-yellow-500"></i>
                  <i class="fa-solid fa-star text-yellow-500"></i>
                  <i class="fa-solid fa-star text-yellow-500"></i>
                  <i class="fa-solid fa-star bg-gradient-to-r from-yellow-500 to-white bg-clip-text text-transparent"></i>
                  <i class="fa-solid fa-star text-slate-300"></i>
                </h1>
              </div>
              <div className="mt-1">
                <p className="mb-2 italic">Sinopsis</p>
                <p>
                  Mengisahkan si dua kecil dengan kisah hidup yang masing-masing memiliki kisah hidup yang serupa, yaitu Kugy dan Keenan. Keenan yaitu seorang remaja yang barusaja mengatasi sekolah menengah atas-nya di Negara kincir
                  angin (Belanda).
                </p>
              </div>
              <div className="mt-5 flex justify-end">
                <div className="flex h-10 items-center rounded-md bg-green-500 p-2 text-white">
                  <i class="fa-solid fa-cart-shopping"></i> Beli Buku
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
