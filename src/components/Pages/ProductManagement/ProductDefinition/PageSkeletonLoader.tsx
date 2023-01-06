import { InnerContainer, WidgetContainer } from '@ui/WidgetContainer';
import { SmallWidget } from '@ui/WidgetContainer/SmallWidget';
import ContentLoader from 'react-content-loader';
import { InputSkeletonLoader } from '@ui/SkeletonLoader/InputSkeletonLoader';
import { TextAreaSkeletonLoader } from '@ui/SkeletonLoader/TextAreaSkeletonLoader';

export const PageSkeletonLoader = () => {
  return (
    <WidgetContainer height='auto'>
      <InnerContainer>
        <div className='flex justify-between items-center'>
          <ContentLoader speed={2} width={110} height={15} backgroundColor='#f3f3f3' foregroundColor='#ecebeb'>
            <rect x='0' y='0' rx='5' ry='5' width='110' height='10' />
          </ContentLoader>
          <div className='flex gap-3'>
            <ContentLoader speed={2} width={150} height={36} backgroundColor='#f3f3f3' foregroundColor='#ecebeb'>
              <rect x='0' y='0' rx='5' ry='5' width='150' height='36' />
            </ContentLoader>
          </div>
        </div>
        <InputSkeletonLoader />
        <div className='grid grid-cols-4 gap-3'>
          <div className='col-span-1'>
            <InputSkeletonLoader />
          </div>
          <div className='col-span-1'>
            <InputSkeletonLoader />
          </div>
          <div className='col-span-2'>
            <InputSkeletonLoader />
          </div>
        </div>
        <TextAreaSkeletonLoader />
        <TextAreaSkeletonLoader />
        <div className='grid grid-cols-2 gap-3'>
          <InputSkeletonLoader />
          <InputSkeletonLoader />
        </div>
        <div className='flex justify-between flex-wrap gap-2'>
          <SmallWidget>
            <div className='flex flex-col gap-2'>
              <ContentLoader speed={2} width={100} height={65} backgroundColor='#f3f3f3' foregroundColor='#ecebeb'>
                <rect x='0' y='0' rx='5' ry='5' width='100' height='65' />
              </ContentLoader>
            </div>
          </SmallWidget>
          <SmallWidget>
            <div className='flex flex-col gap-2'>
              <ContentLoader speed={2} width={100} height={65} backgroundColor='#f3f3f3' foregroundColor='#ecebeb'>
                <rect x='0' y='0' rx='5' ry='5' width='100' height='65' />
              </ContentLoader>
            </div>
          </SmallWidget>
          <SmallWidget>
            <div className='flex flex-col gap-2'>
              <ContentLoader speed={2} width={130} height={65} backgroundColor='#f3f3f3' foregroundColor='#ecebeb'>
                <rect x='0' y='0' rx='5' ry='5' width='130' height='65' />
              </ContentLoader>
            </div>
          </SmallWidget>
          <SmallWidget>
            <div className='flex flex-col gap-2 items-center'>
              <ContentLoader speed={2} width={130} height={65} backgroundColor='#f3f3f3' foregroundColor='#ecebeb'>
                <rect x='0' y='0' rx='5' ry='5' width='130' height='65' />
              </ContentLoader>
            </div>
          </SmallWidget>
        </div>
      </InnerContainer>
    </WidgetContainer>
  );
};
