import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export default function SkeletonLoader() {
  return (
    <SkeletonTheme baseColor="#701" highlightColor="#501">
      <p>
        <Skeleton count={3} />
      </p>
    </SkeletonTheme>
  );
}
