import ReactDOM from "react-dom/client";
import "./index.css";
import Provider from "./Context/Provider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Router";

// TanStack Query Client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </QueryClientProvider>
);
