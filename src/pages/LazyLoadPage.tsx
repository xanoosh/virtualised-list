import ImageComponent from '../components/ImageComponent';
import { useImagesData } from '../hooks/useImagesData';
import { useState } from 'react';

export default function LazyLoadPage() {
  const [page, setPage] = useState(1);

  const { data, isLoading } = useImagesData({
    page,
    limit: 5,
  });

  return (
    <>
      <h1>Lazy load images</h1>
      <p>
        This is a lazy load page that uses the react-query library to fetch
        images from the picsum API.
      </p>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-wrap gap-4">
          {data?.map(
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
        </div>
      )}
      <button onClick={() => setPage(page + 1)}>Next</button>
    </>
  );
}
