import { createContext, useState } from "react";

export const GlobalContext = createContext();

export function InfoProvider({ children }) {
    const [ infoTransporte, setInfoTransporte] = useState({})
    const [stts, setStatus] = useState("")
    const [ show, setShow] = useState(false)


  return (
    <GlobalContext.Provider
      value={{
        infoTransporte, setInfoTransporte,
        show, setShow,
        stts, setStatus
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}