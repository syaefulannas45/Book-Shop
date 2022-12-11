import { createContext } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const toggle = () => {
    const navMenu = document.querySelector("#nav-menu");
    const toggle = document.querySelector("#toggle");
    toggle.classList.toggle("toggle-active");
    navMenu.classList.toggle("hidden");
  };

  const data = [
    {
      id: 1,
      judul: "Ayat-ayat cinta",
      penulis: " A Habiburrahman El Shirazy",
      image: "novel1.png",
      sinopsis: "Mengisahkan tentang seorang pemuda indonesia yang bernama Fahri. Berasal dari keluarga sederhana dan sedang berkuliah S2 di universitas Al-Azhar mesir.",
    },
    {
      id: 1,
      judul: "Laskar Pelangi",
      penulis: "Andrea Hirata",
      image: "novel2.png",
      sinopsis: "Mengisahkan kehidupan 10 anak dari keluarga miskin yang bersekolah (SD dan SMP) di sebuah sekolah Muhammadiyah di Belitung yang penuh dengan keterbatasan",
    },
    {
      id: 1,
      judul: "Perahu Kertas",
      penulis: "Dwi Lestari",
      image: "novel3.png",
      sinopsis:
        "Mengisahkan si dua kecil dengan kisah hidup yang masing-masing memiliki kisah hidup yang serupa, yaitu Kugy dan Keenan. Keenan yaitu seorang remaja yang barusaja mengatasi sekolah menengah atas-nya di Negara kincir angin (Belanda)",
    },
  ];
  const api = { data };

  return <GlobalContext.Provider value={{ api }}>{props.children}</GlobalContext.Provider>;
};
