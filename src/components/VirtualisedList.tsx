import { useRef } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import VirtualisedListElement from './VirtualisedListElement';

export default function VirtualisedList({
  listItems,
}: {
  listItems: { id: number; quote: string; author: string }[];
}) {
  const parentRef = useRef<HTMLDivElement>(null);

  const virtualizer = useVirtualizer({
    count: listItems?.length || 0,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 100,
  });

  const virtualItems = virtualizer.getVirtualItems();
  const totalSize = virtualizer.getTotalSize();

  return (
    <>
      <div
        ref={parentRef}
        className="overflow-auto h-80 border border-slate-600 rounded-sm px-4 py-2"
      >
        <ul
          className="list-disc relative w-full"
          style={{ height: `${totalSize}px` }}
        >
          {virtualItems.map((virtualItem) => {
            const listItem = listItems[virtualItem.index];
            return (
              <VirtualisedListElement
                key={virtualItem.key}
                virtualItem={virtualItem}
                listItem={listItem}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
}
