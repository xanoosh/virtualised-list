import { useQuery } from '@tanstack/react-query';

const getListDataQuery = (count: number) => ({
  queryKey: ['list-data', count],
  queryFn: () => getListData(count),
  staleTime: 1000 * 60 * 5,
});

function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getListData(count: number) {
  await timeout(1000);
  try {
    const response = await fetch(
      `https://dummyjson.com/quotes?limit=${count}`,
      {
        method: 'GET',
      }
    );
    if (response.status !== 200) {
      throw new Error('Failed to fetch list data');
    }
    const listData = await response.json();
    return listData?.quotes;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export function useListData({ count }: { count: number }) {
  return useQuery(getListDataQuery(count));
}
