import tanstackLogo from './assets/tanstack-logo.png';
import VirtualisedList from './components/VirtualisedList';
import { useListData } from './hooks/useListData';
import SkeletonLoader from './components/SkeletonLoader';

function App() {
  const { data, isLoading } = useListData({
    count: 500,
  });

  return (
    <div className="flex flex-col gap-6 items-center justify-center h-screen p-4">
      <div>
        <img
          src={tanstackLogo}
          className="w-20 h-20 mx-auto"
          alt="Tanstack logo"
        />
      </div>
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
    </div>
  );
}

export default App;
