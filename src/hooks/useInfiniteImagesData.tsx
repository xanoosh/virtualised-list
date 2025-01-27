import { useInfiniteQuery } from '@tanstack/react-query';

interface PageElement {
  id: string;
  url: string;
  author: string;
}

const getImagesDataQuery = () => ({
  queryKey: ['images-data'],
  initialPageParam: 1,
  queryFn: ({ pageParam }: { pageParam: number }) => getImagesData(pageParam),
  getNextPageParam: (_lastPage: PageElement[], pages: PageElement[][]) => {
    return pages.length + 1;
  },
});

async function getImagesData(page: number) {
  try {
    const response = await fetch(
      `https://picsum.photos/v2/list?page=${page}&limit=${page === 1 ? 12 : 8}`,
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

export function useInfiniteImagesData() {
  return useInfiniteQuery(getImagesDataQuery());
}
