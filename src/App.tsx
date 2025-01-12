import tanstackLogo from './assets/tanstack-logo.png';
import './App.css';
import VirtualisedList from './components/VirtualisedList';
import { useListData } from './hooks/useListData';
import SkeletonLoader from './components/Loader';

function App() {
  const { data, isLoading } = useListData({
    count: 500,
  });

  console.log('data', data);

  return (
    <>
      <div>
        <img
          src={tanstackLogo}
          className="w-20 h-20 mx-auto"
          alt="Tanstack logo"
        />
      </div>
      <h1>Virtualised List</h1>
      <p>
        This is a virtualised list that uses the react-vitualise tanstack
        library to render a list of items.
      </p>
      <div className="card">
        <SkeletonLoader />
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

export default App;
