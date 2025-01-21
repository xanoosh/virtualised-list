import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import tanstackLogo from './assets/tanstack-logo.png';

function App() {
  return (
    <div className="flex flex-col gap-6 h-screen">
      <NavBar
        navigationArray={[
          { name: 'Home', path: '' },
          { name: 'Virtualised List', path: '/virtualised-list' },
          { name: 'Lazy Load', path: '/lazy-load' },
        ]}
      />
      <section className="flex flex-col gap-4 items-center justify-center p-4">
        <div>
          <img
            src={tanstackLogo}
            className="w-20 h-20 mx-auto"
            alt="Tanstack logo"
          />
        </div>
        <Outlet />
      </section>
    </div>
  );
}

export default App;
