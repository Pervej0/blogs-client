import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/route";
import FavouriteBlogsProvider from "./context/favouriteContext";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <FavouriteBlogsProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />;
        </QueryClientProvider>
      </FavouriteBlogsProvider>
    </>
  );
}

export default App;
