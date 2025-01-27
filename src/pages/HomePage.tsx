export default function HomePage() {
  return (
    <div className="text-center flex flex-col gap-4">
      <h1 className="text-4xl font-semibold">Home page</h1>
      <p className="text-lg">
        Simple app showcasing listvirtualisation as well as lazy loading. Both
        examples are built with custom hooks leveraging tanstack query
        <b>(useInfiniteQuery, useQuery)</b> and data consumption from 2 simple
        APIs. Deployed on Vercel'
      </p>
    </div>
  );
}
