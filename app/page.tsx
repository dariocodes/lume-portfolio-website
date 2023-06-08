import { MasonryTabs } from '@/components/MasonryGridTabs';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="h-full bg-stone-900 flex flex-col overflow-auto relative">
      <header className="flex justify-center items-center px-6 py-4">
        <div className="flex-1 fixed left-8">
          <ul>
            <li>
              <a href="#">WORK</a>
            </li>
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">BRANDS</a>
            </li>
            <li>
              <a href="#">FEATURES</a>
            </li>
          </ul>
        </div>
        <div className=" flex-1 text-9xl font-bold text-center">LUME</div>
        <div className="flex-1 flex justify-end items-center fixed right-8">
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
