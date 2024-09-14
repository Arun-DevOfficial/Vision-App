import { createContext, useState } from "react";

export const ContextMenu = createContext();

const blogStructure = {
  title: "",
  banner: "",
  content: [],
  tags: [],
  desc: "",
  author: "",
};

export default function Provider({ children }) {
  const [model, setModel] = useState(false);
  const [blog, setBlog] = useState(blogStructure);
  return (
    <ContextMenu.Provider value={{ model, setModel, blog, setBlog }}>
      {children}
    </ContextMenu.Provider>
  );
}
