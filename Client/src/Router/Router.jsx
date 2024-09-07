import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
// import ErrorPage from "../Pages/ErrorPage";

// Lazy load the Home component
const Home = lazy(() => import("../Pages/Home"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    ),
    // errorElement: <ErrorPage />, // Add error handling for non-existent routes
  },
]);

export default router;
