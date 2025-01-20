import { NavLink } from 'react-router-dom';

export default function NavBar({
  navigationArray,
}: {
  navigationArray: { name: string; path: string }[] | undefined;
}) {
  if (!navigationArray) return null;
  return (
    <nav className="w-full flex h-14 items-strech justify-around border-b-4 border-slate-700">
      {navigationArray.map((navigationElement) => {
        return (
          <NavLink
            to={navigationElement.path}
            end
            className={({ isActive }) => {
              return `relative w-full h-full flex items-center justify-center text-sm font-medium ${
                isActive
                  ? 'bg-slate-900 after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[4px] after:bg-slate-500'
                  : 'hover:bg-slate-800'
              }`;
            }}
          >
            {navigationElement.name}
          </NavLink>
        );
      })}
    </nav>
  );
}
