import ImageComponent from '../components/ImageComponent';
import { useInfiniteImagesData } from '../hooks/useInfiniteImagesData';
import React, { useState } from 'react';

export default function LazyLoadPage() {
  const [page, setPage] = useState(1);

  const { data, isLoading, fetchNextPage } = useInfiniteImagesData({
    page,
  });
  console.log(data);
  return (
    <div className="text-center flex flex-col gap-4">
      <h1 className="text-4xl font-semibold">Lazy load images</h1>
      <p className="text-lg">
        This is a lazy load page that uses the react-query library to fetch
        images from the picsum API.
      </p>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-wrap gap-4 justify-center">
          {data?.pages.map((group, i) => (
            <React.Fragment key={i}>
              {group.map(
                ({
                  id,
                  url,
                  author,
                }: {
                  id: string;
                  url: string;
                  author: string;
                }) => (
                  <ImageComponent key={id} url={url} author={author} />
                )
              )}
            </React.Fragment>
          ))}
        </div>
      )}
      <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
      <button onClick={() => fetchNextPage}>Fetch i guess</button>
    </div>
  );
}
