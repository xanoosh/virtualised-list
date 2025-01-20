import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';

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
        <Outlet />
      </section>
    </div>
  );
}

export default App;
