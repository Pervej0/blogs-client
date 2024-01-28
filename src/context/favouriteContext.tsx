import React, { ReactNode, createContext, useState } from "react";

export const FavouriteContext = createContext({});

const FavouriteBlogsProvider = ({ children }: { children: ReactNode }) => {
  const [favouriteBlog, setFavouriteBlog] = useState([]);
  return (
    <FavouriteContext.Provider value={{ favouriteBlog, setFavouriteBlog }}>
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteBlogsProvider;
