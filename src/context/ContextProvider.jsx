import { useState, useEffect } from "react";
import MyContext from "./MyContext";

const ContextProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);
  return (
    <MyContext.Provider value={{ isMobile, setIsMobile }}>
      {children}
    </MyContext.Provider>
  );
};

export default ContextProvider;
