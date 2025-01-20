import { useQuery } from '@tanstack/react-query';

const getImagesDataQuery = (page: number, limit: number) => ({
  queryKey: ['list-data', page, limit],
  queryFn: () => getImagesData(page, limit),
  keepPreviousData: true,
  staleTime: 1000 * 60 * 5,
});

async function getImagesData(page: number, limit: number) {
  try {
    const response = await fetch(
      `https://picsum.photos/v2/list?page=${page}&limit=${limit}`,
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

export function useImagesData({
  page,
  limit,
}: {
  page: number;
  limit: number;
}) {
  return useQuery(getImagesDataQuery(page, limit));
}
