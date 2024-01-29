// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { ReactNode, createContext, useState } from "react";

type TComment = {
  _id: string;
  blogId: string;
  name: string;
  body: string;
  email: string;
};

type TFavouriteBlog = {
  userId: string;
  _id: string;
  title: string;
  body: string;
  comments: TComment[];
};

type TSetFavouriteBlog = React.Dispatch<React.SetStateAction<TFavouriteBlog[]>>;

export const FavouriteContext = createContext<{
  favouriteBlog: TFavouriteBlog[];
  setFavouriteBlog: TSetFavouriteBlog;
}>({ favouriteBlog: [], setFavouriteBlog: () => {} });

const FavouriteBlogsProvider = ({ children }: { children: ReactNode }) => {
  const [favouriteBlog, setFavouriteBlog] = useState([]);

  return (
    <FavouriteContext.Provider value={{ favouriteBlog, setFavouriteBlog }}>
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteBlogsProvider;
