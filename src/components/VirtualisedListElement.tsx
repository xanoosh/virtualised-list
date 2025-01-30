export default function VirtualisedListElement({
  virtualItem,
  listItem,
}: {
  virtualItem: { size: number; start: number };
  listItem: { quote: string; author: string };
}) {
  return (
    <li
      className="absolute top-0 left-0 w-full flex flex-col justify-between items-start p-4 border-b border-slate-600 text-white text-left h-full overflow-hidden"
      style={{
        height: `${virtualItem.size}px`,
        transform: `translateY(${virtualItem.start}px)`,
      }}
    >
      <svg
        className="md:w-4 md:h-4 w-2 h-2 text-slate-300 md:mb-2 md-1"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 18 14"
      >
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
      </svg>
      <i className="md:text-sm text-xs font-semibold text-ellipsis">
        {listItem?.quote}
      </i>

      <small className="text-slate-300 text-xs w-full text-right">
        {listItem?.author}
      </small>
    </li>
  );
}
