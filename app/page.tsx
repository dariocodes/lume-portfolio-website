//USE CLIENT FOR TABS IMPORT (REFACTOR LATER?)
'use client';

import { Tab } from '@headlessui/react';

import Link from 'next/link';

const tabs = [
  {
    key: 'all',
    display: 'All',
  },
  {
    key: 'watches',
    display: 'Watches',
  },
  {
    key: 'lifestyle',
    display: 'Lifestyle',
  },
];

export default function Home() {
  return (
    <div className="h-full bg-stone-900 flex flex-col">
      <header className="flex justify-center items-center px-6 py-2">
        <div className="flex-1">
          <ul>
            <li>
              <a href="#">WORK</a>
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
        <div className="flex-1 flex justify-end items-center">
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
        <div className="flex flex-col justify-center items-center h-full">
          <Tab.Group>
            <Tab.List className="flex justify-center items-center gap-12 py-8">
              {tabs.map((tab) => (
                <Tab key={tab.key}>
                  {({ selected }) => (
                    <span
                      className={selected ? 'text-white' : 'text-stone-600'}
                    >
                      {tab.display}
                    </span>
                  )}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="h-full bg-stone-200 max-w-[900px] w-full">
              <Tab.Panel>All Photos</Tab.Panel>
              <Tab.Panel>Watches</Tab.Panel>
              <Tab.Panel>Lifestyle</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </main>

      <footer className="h-[60px] flex justify-center items-center">
        <p>LUME</p>
      </footer>
    </div>
  );
}
