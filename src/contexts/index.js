import { createContext, useState } from "react";

export const GlobalContext = createContext();

export function InfoProvider({ children }) {
  const [infoTransporte, setInfoTransporte] = useState({});
  const [stts, setStatus] = useState("");
  const [show, setShow] = useState(false);
  const [dados, setDados] = useState([]);
  const [crgParada, setCargaParada] = useState(false);
  const [obsCargaParada, setObsCargaParada] = useState("");

  return (
    <GlobalContext.Provider
      value={{
        infoTransporte,
        setInfoTransporte,
        show,
        setShow,
        stts,
        setStatus,
        dados,
        setDados,
        crgParada,
        setCargaParada,
        obsCargaParada,
        setObsCargaParada,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
