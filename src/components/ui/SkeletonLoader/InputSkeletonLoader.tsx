import ContentLoader from 'react-content-loader';

export const InputSkeletonLoader: React.FC<{}> = () => {
  return (
    <ContentLoader speed={2} width={'100%'} height={50} backgroundColor='#f3f3f3' foregroundColor='#ecebeb'>
      <rect x='0' y='0' rx='10' ry='10' width='80' height='15' />
      <rect x='0' y='25' rx='10' ry='10' width='150' height='15' />
    </ContentLoader>
  );
};
