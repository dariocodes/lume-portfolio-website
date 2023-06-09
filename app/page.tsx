import { Brands } from '@/components/Brands';
import { HeaderComponent } from '@/components/Header';
import { LogoCloud } from '@/components/LogoClouds';
import { MasonryTabs } from '@/components/MasonryGridTabs';

export default function Home() {
  return (
    <div className="h-full bg-stone-900 flex flex-col overflow-auto relative">
      <HeaderComponent></HeaderComponent>

      <main className="grow">
        <MasonryTabs></MasonryTabs>
      </main>
      <section className="mt-6 px-6 py-12 text-center">
        <Brands />
      </section>
      <section>
        <LogoCloud />
      </section>

      <footer className="h-[60px] flex justify-center items-center py-12">
        <p>LUME</p>
      </footer>
    </div>
  );
}
