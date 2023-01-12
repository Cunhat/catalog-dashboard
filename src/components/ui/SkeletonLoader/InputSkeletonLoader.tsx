import { SkeletonLoader } from '@ui/SkeletonLoader';

export const InputSkeletonLoader: React.FC<{}> = () => {
  return (
    <SkeletonLoader>
      <rect x='0' y='0' rx='5' ry='5' width='80' height='10' />
      <rect x='0' y='28' rx='5' ry='5' width='150' height='10' />
    </SkeletonLoader>
  );
};
