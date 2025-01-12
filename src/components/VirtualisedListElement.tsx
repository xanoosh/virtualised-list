export default function VirtualisedListElement({
  virtualItem,
  listItem,
}: {
  virtualItem: { size: number; start: number };
  listItem: { quote: string; author: string };
}) {
  return (
    <li
      className="absolute top-0 left-0 w-full flex justify-start items-center p-4 border-b border-slate-600"
      style={{
        height: `${virtualItem.size}px`,
        transform: `translateY(${virtualItem.start}px)`,
      }}
    >
      <blockquote className="text-white text-left">
        <svg
          className="w-4 h-4 text-slate-300 mb-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 14"
        >
          <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
        </svg>
        <i className="">"{listItem?.quote}"</i>
      </blockquote>

      <small className="absolute bottom-2 right-4 text-slate-300 text-xs">
        {listItem?.author}
      </small>
    </li>
  );
}
