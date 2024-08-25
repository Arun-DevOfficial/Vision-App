import { createContext, useState } from "react";

export const ContextMenu = createContext();

export default function Provider({ children }) {
  const [model, setModel] = useState(false);
  console.log(model);

  return (
    <ContextMenu.Provider value={{ model, setModel }}>
      {children}
    </ContextMenu.Provider>
  );
}
