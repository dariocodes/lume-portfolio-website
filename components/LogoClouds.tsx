import Image from 'next/image';

export function LogoCloud() {
  return (
    <div className="bg-stone-900 py-24 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-white">
          Appearing in
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-4 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="/logocloud/quote.png"
            alt="logo"
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="/logocloud/gq.png"
            alt="logo"
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="/logocloud/hypebeast.png"
            alt="logo"
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="/logocloud/RTL.png"
            alt="logo"
            width={158}
            height={48}
          />
        </div>
        <div className="mt-16 flex justify-center">
          <p className="relative rounded-full bg-gray-800 px-4 py-1.5 text-sm leading-6 text-gray-300">
            <span className="hidden md:inline">
              Our content has been viewed by millions of people
            </span>
            <a href="#" className="font-semibold text-white">
              <span className="absolute inset-0" aria-hidden="true" /> Contact
              us <span aria-hidden="true">&rarr;</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
