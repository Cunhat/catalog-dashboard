import { Text } from '@ui/Typography/Text';
import { cva } from 'class-variance-authority';
import React, { PropsWithChildren, ReactNode, useEffect, useState } from 'react';
import ContentLoader from 'react-content-loader';

const tabElementStyle = cva('flex flex-1 justify-center items-center py-1 px-[5px] rounded-lg hover:cursor-pointer text-center', {
  variants: {
    activeTab: {
      true: 'bg-primary text-white',
      false: 'hover:bg-hover dark:hover:bg-primary',
    },
  },
});

interface TabComponent {
  TabElement: typeof TabElement;
}

type TabElementValue = {
  tabTitle: string;
  children: ReactNode;
  isLoading?: boolean;
};

const Tab: React.FC<PropsWithChildren> & TabComponent = ({ children, isLoading = true }) => {
  const [tabsData, setTabsData] = useState<Array<TabElementValue>>([]);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const data: Array<TabElementValue> = [];

    React.Children.forEach(children, (element) => {
      if (!React.isValidElement(element)) return;
      const {
        props: { tabTitle, children },
      } = element;

      data.push({ tabTitle, children });
    });
    setTabsData(data);
  }, [children]);

  return (
    <div>
      {isLoading ? (
        <ContentLoader speed={2} width={'100%'} height={15} backgroundColor='#f3f3f3' foregroundColor='#ecebeb'>
          <rect x='0' y='0' rx='5' ry='5' width='95%' height='50' />
        </ContentLoader>
      ) : (
        <ul className='flex rounded-t-lg bg-slate-100 dark:bg-dark-background shadow-lg'>
          {tabsData?.map((tab, index) => {
            return (
              <li key={index} className={tabElementStyle({ activeTab: activeTab === index })} onClick={() => setActiveTab(index)}>
                <Text color={activeTab === index ? 'text-white' : ''} text={tab.tabTitle} />
              </li>
            );
          })}
        </ul>
      )}
      <div className='flex flex-col p-3'>{tabsData[activeTab]?.children}</div>
    </div>
  );
};

const TabElement = ({ children }: { children: ReactNode; tabTitle: string }) => {
  return <>{children}</>;
};

Tab.TabElement = TabElement;

export default Tab;
