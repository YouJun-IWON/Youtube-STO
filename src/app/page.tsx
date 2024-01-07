import Feature from '@/components/lending/Feature';
import Fourth from '@/components/lending/Fourth';
import Hero from '@/components/lending/Hero';
import Partners from '@/components/lending/Partners';
import Second from '@/components/lending/Second';
import Third from '@/components/lending/Third';

export default function Home() {
  return (
    <main>
      <Hero />
      <Partners />
      <Second />
      <Third />
      <Feature />
      <Fourth />
    </main>
  );
}
