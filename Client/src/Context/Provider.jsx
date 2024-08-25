import { createContext, useState } from "react";

export const ContextMenu = createContext();

export default function Provider({ children }) {
  const [model, setModel] = useState(false);

  return (
    <ContextMenu.Provider value={{ model, setModel }}>
      {children}
    </ContextMenu.Provider>
  );
}
