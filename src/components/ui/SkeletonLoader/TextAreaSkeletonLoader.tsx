import { SkeletonLoader } from '@ui/SkeletonLoader';

export const TextAreaSkeletonLoader: React.FC<{}> = () => {
  return (
    <SkeletonLoader>
      <rect x='0' y='0' rx='5' ry='5' width='80' height='10' />
      <rect x='0' y='28' rx='5' ry='5' width='90%' height='10' />
    </SkeletonLoader>
  );
};
