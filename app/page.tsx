import { MasonryTabs } from '@/components/MasonryGridTabs';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="h-full bg-stone-900 flex flex-col overflow-auto relative">
      <header className="flex justify-center items-center px-6 py-6">
        <div className="flex-1 fixed md:flex hidden left-8 z-10">
          <ul>
            <li className="transition-all hover:text-stone-400 ">
              <a href="#">WORK</a>
            </li>
            <li className="transition-all hover:text-stone-400 ">
              <a href="#">ABOUT</a>
            </li>
            <li className="transition-all hover:text-stone-400 ">
              <a href="#">BRANDS</a>
            </li>
            <li className="transition-all hover:text-stone-400 ">
              <a href="#">FEATURES</a>
            </li>
          </ul>
        </div>
        <div className=" flex-1 md:text-9xl text-6xl font-bold text-center">
          LUME
        </div>
        <div className="flex-1 fixed justify-end items-center md:flex hidden right-8 z-10">
          {' '}
          <Link
            href="#"
            className="transition-all bg-transparent font-regular hover:bg-white hover:text-stone-900 py-2 px-4 border border-white hover:border-transparent rounded-full"
          >
            CONTACT
          </Link>
        </div>
      </header>

      <main className="grow">
        <MasonryTabs></MasonryTabs>
      </main>

      <footer className="h-[60px] flex justify-center items-center py-12">
        <p>LUME</p>
      </footer>
    </div>
  );
}
