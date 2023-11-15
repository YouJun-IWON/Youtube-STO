import React from "react";
import {Tabs, Tab, Chip} from "@nextui-org/react";


export default function CustomFilter({selected, setSelected}: any) {

  
  return (
    <div className="flex w-full flex-col mt-3 justify-between">
      <Tabs 
        aria-label="Filters" 
        color="primary" 
        variant="underlined"
        selectedKey={selected}
            onSelectionChange={setSelected}
        classNames={{
          tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
          cursor: "w-full bg-[#dc2626]",
          tab: "max-w-fit px-0 h-12",
          tabContent: "group-data-[selected=true]:text-[#dc2626] text-lg"
        }}
      >
        <Tab
          key={0}
          title={
            <div className="flex items-center space-x-2">
            
              <span>가격상승</span>
              
            </div>
          }
        />
        <Tab
          key={1}
          title={
            <div className="flex items-center space-x-2">
         
              <span>가격하락</span>
              
            </div>
          }
        />
        <Tab
          key={2}
          title={
            <div className="flex items-center space-x-2">
     
              <span>조회수상승</span>
              
            </div>
          }
        />
         <Tab
          key={3}
          title={
            <div className="flex items-center space-x-2">
     
              <span>조회수하락</span>
              
            </div>
          }
        />
      </Tabs>
      
    </div>  
  );
}
