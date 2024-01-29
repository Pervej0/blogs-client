import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/route";
import FavouriteBlogsProvider from "./context/favouriteContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <FavouriteBlogsProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />;
          <ToastContainer />
        </QueryClientProvider>
      </FavouriteBlogsProvider>
    </>
  );
}

export default App;
