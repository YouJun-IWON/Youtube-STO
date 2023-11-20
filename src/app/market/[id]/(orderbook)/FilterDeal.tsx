
import { Tabs, Tab, Chip } from '@nextui-org/react';

export default function FilterDeal() {
  return (
    <div className='flex w-full mt-10 flex-col'>
      <Tabs
        aria-label='Filter'
        color='primary'
        variant='underlined'
        classNames={{
          tabList:
            'gap-6 w-full relative rounded-none p-0 border-b border-divider',
          cursor: 'w-full bg-[#ee4122]',
          tab: 'max-w-fit px-0 h-12',
          tabContent: 'group-data-[selected=true]:text-[#ee4122]',
        }}
      >
        <Tab
          key='photos'
          title={
            <div className='flex items-center space-x-2'>
              <span>당일 시세</span>
              
            </div>
          }
        />
        <Tab
          key='music'
          title={
            <div className='flex items-center space-x-2'>
              <span>일별 거래량</span>
              
            </div>
          }
        />
      
      </Tabs>
    </div>
  );
}
