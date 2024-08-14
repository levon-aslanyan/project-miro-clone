"use client";

import EmptyBoards from "./empty-boards";
import EmptyFavorite from "./empty-favorites";
import EmptySearch from "./empty-search";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}

const BoardList = ({ orgId, query }: BoardListProps) => {
  const data = []; //! TODO

  if (!data?.length && query.search) {
    return <EmptySearch />;
  }

  if (!data?.length && query.favorites) {
    return <EmptyFavorite />;
  }

  if (!data.length) {
    return <EmptyBoards />;
  }

  return <div>{JSON.stringify(query)}</div>;
};

export default BoardList;
