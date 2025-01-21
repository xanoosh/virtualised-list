import { useListData } from '../hooks/useListData';
import SkeletonLoader from '../components/SkeletonLoader';
import VirtualisedList from '../components/VirtualisedList';

export default function VirtualisedListPage() {
  const { data, isLoading } = useListData({
    count: 500,
  });
  return (
    <>
      <h1 className="text-4xl font-semibold">Virtualised List</h1>
      <p className="text-lg w-[80%] text-center">
        This is a virtualised list that uses the react-vitualise tanstack
        library to render a list of items.
      </p>
      <div className="w-[80%]">
        {isLoading ? (
          <>
            <SkeletonLoader />
          </>
        ) : null}
        {!data ? null : <VirtualisedList listItems={data} />}
      </div>
    </>
  );
}
