import { useRef } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { useListData } from '../hooks/useListData';

export default function VirtualisedList() {
  const parentRef = useRef<HTMLDivElement>(null);

  const { data: listItems } = useListData({
    count: 500,
  });

  const virtualizer = useVirtualizer({
    count: listItems?.length || 0,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 70,
  });

  const virtualItems = virtualizer.getVirtualItems();
  const totalSize = virtualizer.getTotalSize();
  if (!listItems) return null;

  return (
    <>
      <div
        ref={parentRef}
        className="overflow-auto h-56 border border-slate-400"
      >
        <ul
          className="list-disc relative w-full"
          style={{ height: `${totalSize}px` }}
        >
          {virtualItems.map((virtualItem) => {
            const listItem = listItems[virtualItem.index];
            return (
              <li
                key={virtualItem.key}
                className="absolute top-0 left-0 w-full flex justify-start items-center py-2 px-4"
                style={{
                  height: `${virtualItem.size}px`,
                  transform: `translateY(${virtualItem.start}px)`,
                }}
              >
                <blockquote className="italic font-semibold text-white">
                  <svg
                    className="w-4 h-4 text-slate-300 mb-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 14"
                  >
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                  </svg>
                  <p>{listItem?.quote}</p>
                </blockquote>

                <small className="absolute bottom-0 right-0 text-slate-300 text-sm">
                  {listItem?.author}
                </small>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
