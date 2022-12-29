import ContentLoader from 'react-content-loader';

export const InputSkeletonLoader: React.FC<{}> = () => {
  return (
    <ContentLoader speed={2} width={'100%'} height={52} backgroundColor='#f3f3f3' foregroundColor='#ecebeb'>
      <rect x='0' y='0' rx='5' ry='5' width='80' height='10' />
      <rect x='0' y='28' rx='5' ry='5' width='150' height='10' />
    </ContentLoader>
  );
};
