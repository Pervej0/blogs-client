import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/route";
import FavouriteBlogsProvider from "./context/favouriteContext";

function App() {
  return (
    <>
      <FavouriteBlogsProvider>
        <RouterProvider router={router} />;
      </FavouriteBlogsProvider>
    </>
  );
}

export default App;
