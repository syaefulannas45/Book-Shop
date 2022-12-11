import { createContext } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const toggle = () => {
    const navMenu = document.querySelector("#nav-menu");
    const toggle = document.querySelector("#toggle");
    toggle.classList.toggle("toggle-active");
    navMenu.classList.toggle("hidden");
  };

  const handleFunction = { toggle };
  return <GlobalContext.Provider value={{ handleFunction }}>{props.children}</GlobalContext.Provider>;
};
