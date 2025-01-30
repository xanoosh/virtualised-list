import ImageComponent from '../components/ImageComponent';
import Loader from '../components/Loader';
import { useInfiniteImagesData } from '../hooks/useInfiniteImagesData';
import React from 'react';

export default function LazyLoadPage() {
  const { data, isLoading, fetchNextPage, isFetchingNextPage } =
    useInfiniteImagesData();

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (
      e.currentTarget.scrollTop + e.currentTarget.clientHeight >=
      e.currentTarget.scrollHeight
    ) {
      fetchNextPage();
    }
  };

  return (
    <div className="text-center flex flex-col gap-4">
      <h1 className="text-4xl font-semibold">Lazy load images</h1>
      <p className="text-lg">
        This is a lazy load page that uses the react-query library to fetch
        images from the picsum API. scroll down to load more images
      </p>
      {isLoading ? (
        <Loader className="w-full md:h-80 h-50 flex justify-center items-center" />
      ) : (
        <div
          className="grid md:grid-cols-4 grid-cols-3 gap-4 md:h-80 h-60 overflow-y-auto w-full"
          onScroll={handleScroll}
        >
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
          {isFetchingNextPage && (
            <Loader className="w-full flex justify-center items-center col-span-4 py-4" />
          )}
        </div>
      )}
    </div>
  );
}
