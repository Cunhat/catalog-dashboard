import { Text } from '@/components/Typography/Text';
import { cva } from 'class-variance-authority';
import React, { PropsWithChildren, ReactNode, useEffect, useState } from 'react';

const tabElementStyle = cva('flex flex-1 justify-center items-center py-1 px-[5px] rounded-lg hover:cursor-pointer text-center', {
  variants: {
    activeTab: {
      true: 'bg-primary text-white',
      false: 'hover:bg-hover_light',
    },
  },
});

interface TabComponent {
  TabElement: typeof TabElement;
}

type TabElementValue = {
  tabTitle: string;
  children: ReactNode;
};

const Tab: React.FC<PropsWithChildren> & TabComponent = ({ children }) => {
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
      <ul className='flex rounded-t-lg bg-slate-100'>
        {tabsData?.map((tab, index) => {
          return (
            <li key={index} className={tabElementStyle({ activeTab: activeTab === index })} onClick={() => setActiveTab(index)}>
              <Text color={activeTab === index ? 'text-white' : ''} text={tab.tabTitle} />
            </li>
          );
        })}
      </ul>
      <div className='flex flex-col p-3'>{tabsData[activeTab]?.children}</div>
    </div>
  );
};

const TabElement = ({ children }: { children: ReactNode; tabTitle: string }) => {
  return <>{children}</>;
};

Tab.TabElement = TabElement;

export default Tab;
