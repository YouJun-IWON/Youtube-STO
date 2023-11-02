'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Fourth = () => {
  return (
    <div className='items-center flex flex-col justify-center md:p-40 space-y-10'>
      <div
        className='text-center md:text-6xl text-4xl 
      bg-gradient-to-r
      from-orange-800
      to-red-500
      bg-clip-text
      text-transparent
  
      font-bold
      
      '
      >
        이 플랫폼에 대한 궁금증
      </div>
      <div className='text-black md:text-5xl text-3xl w-full justify-center items-center flex md:pt-10 p-10'>
        <Accordion type='single' collapsible className='w-full'>
          <AccordionItem value='item-1'>
            <AccordionTrigger>수익은 어떻게 발생하나요?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-2'>
            <AccordionTrigger>그렇다면, 정산은 언제 되는 건가요?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-3'>
            <AccordionTrigger>내 현금은 어떻게 되고 있는 거죠?</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Fourth;
