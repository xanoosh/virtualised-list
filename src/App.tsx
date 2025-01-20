import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="flex flex-col gap-6 items-center justify-center h-screen p-4">
      <NavBar
        navigationArray={[
          { name: 'Home', path: '' },
          { name: 'Virtualised List', path: '/virtualised-list' },
          { name: 'Lazy Load', path: '/lazy-load' },
        ]}
      />
      <section>
        <Outlet />
      </section>
    </div>
  );
}

export default App;
