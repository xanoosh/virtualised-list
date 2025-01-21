import { useInfiniteQuery } from '@tanstack/react-query';

const getImagesDataQuery = (page: number) => ({
  queryKey: ['images-data', page],
  queryFn: () => getImagesData(page),
  initialPageParam: 1,
  // getNextPageParam: (lastPage: { id: string; url: string; author: string }[]) =>
  //   lastPage,
  getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
  staleTime: 1000 * 60 * 5,
});

async function getImagesData(page: number) {
  try {
    const response = await fetch(
      `https://picsum.photos/v2/list?page=${page}&limit=8`,
      {
        method: 'GET',
      }
    );
    if (response.status !== 200) {
      throw new Error('Failed to fetch image data');
    }
    const imagesData = await response.json();
    return imagesData.map(
      ({
        id,
        download_url,
        author,
      }: {
        id: string;
        download_url: string;
        author: string;
      }) => ({
        id,
        url: download_url,
        author,
      })
    );
  } catch (error) {
    console.error(error);
    return error;
  }
}

export function useInfiniteImagesData({ page }: { page: number }) {
  return useInfiniteQuery(getImagesDataQuery(page));
}
