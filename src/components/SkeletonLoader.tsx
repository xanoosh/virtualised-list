export default function SkeletonLoader() {
  return (
    <div
      role="status"
      className="h-80 p-4 space-y-4 border border-slate-200 rounded shadow animate-[pulse_1s_ease-in-out_infinite] dark:divide-slate-700 md:p-6 dark:border-slate-700"
    >
      <div className="relative border-b border-slate-600 pb-3">
        <div className="flex flex-col gap-3">
          <div className="h-7 w-7 bg-slate-300 rounded-full dark:bg-slate-600"></div>
          <div className="w-80 h-3 bg-slate-200 rounded-full dark:bg-slate-700"></div>
          <div className="w-60 h-3 bg-slate-200 rounded-full dark:bg-slate-700"></div>
        </div>
        <div className="h-2 bg-slate-300 rounded-full dark:bg-slate-700 w-12 absolute bottom-2 right-0"></div>
      </div>
      <div className="relative border-b border-slate-600 pb-3">
        <div className="flex flex-col gap-3">
          <div className="h-7 w-7 bg-slate-300 rounded-full dark:bg-slate-600"></div>
          <div className="w-80 h-3 bg-slate-200 rounded-full dark:bg-slate-700"></div>
          <div className="w-60 h-3 bg-slate-200 rounded-full dark:bg-slate-700"></div>
        </div>
        <div className="h-2 bg-slate-300 rounded-full dark:bg-slate-700 w-12 absolute bottom-2 right-0"></div>
      </div>
      <div className="relative border-b border-slate-600 pb-3">
        <div className="flex flex-col gap-3">
          <div className="h-7 w-7 bg-slate-300 rounded-full dark:bg-slate-600"></div>
          <div className="w-80 h-3 bg-slate-200 rounded-full dark:bg-slate-700"></div>
          <div className="w-60 h-3 bg-slate-200 rounded-full dark:bg-slate-700"></div>
        </div>
        <div className="h-2 bg-slate-300 rounded-full dark:bg-slate-700 w-12 absolute bottom-2 right-0"></div>
      </div>
    </div>
  );
}
