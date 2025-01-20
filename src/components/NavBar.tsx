import { NavLink } from 'react-router-dom';

export default function NavBar({
  navigationArray,
}: {
  navigationArray: { name: string; path: string }[] | undefined;
}) {
  if (!navigationArray) return null;
  return (
    <nav className="bg-slate-800">
      <div className="mx-auto px-6 sm:px-12">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-stretch justify-start">
            <div className="ml-6">
              <div className="flex space-x-4">
                {navigationArray.map((navigationElement) => {
                  return (
                    <NavLink
                      to={navigationElement.path}
                      end
                      className={({ isActive }) => {
                        return `rounded-md px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-slate-800 focus:ring-offset-4 ${
                          isActive
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                        }`;
                      }}
                    >
                      {navigationElement.name}
                    </NavLink>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
