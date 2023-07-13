'use client';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'WORK', href: '#work' },
  { name: 'BRANDS', href: '#brands' },
  { name: 'FEATURED', href: '#features' },
];

export function HeaderComponent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-stone-900">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex flex-1">
          <div className="hidden lg:flex flex-col lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="transition-all hover:text-stone-400"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 "
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
        <a href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">LUME</span>
          <p className="md:text-9xl text-6xl font-bold tracking-tighter">
            LUME
          </p>
        </a>
        <div className="flex flex-1 justify-end opacity-0 sm:opacity-100">
          <a
            href="/contact"
            className="transition-all bg-transparent font-regular hover:bg-white hover:text-stone-900 py-2 px-4 border border-white hover:border-transparent rounded-full"
          >
            CONTACT
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 left-0 z-10 w-full overflow-y-auto bg-stone-900 px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex flex-1">
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 "
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">LUME</span>
              <p className="text-6xl font-bold tracking-tighter">LUME</p>
            </a>
            <div className="flex flex-1 justify-end">
              <a href="/contact" className="text-sm font-semibold leading-6">
                Contact <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="mt-6 space-y-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7  hover:text-stone-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
