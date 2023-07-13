'use client';
import { Tab } from '@headlessui/react';

import Masonry from 'react-masonry-css';

//lightbox
import type { LightGallery } from 'lightgallery/lightgallery';
import LightGalleryComponent from 'lightgallery/react';

// lightbox import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

//lightbox plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import { use, useRef } from 'react';

import Image from 'next/image';

//source images !!
import watch1 from '/public/watch1.webp';
import watch2 from '/public/watch2.webp';
import watch3 from '/public/watch3.webp';
import lapis from 'public/lapis-dd.jpg';
import watch5 from '/public/watch5.webp';
import watch6 from '/public/watch6.jpg';
import watch7 from '/public/watch7.jpg';
import watch8 from '/public/watch8.jpg';
import stonedialduo from 'public/stonedialduo.jpg';
import apclose from 'public/apclose.jpg';
import khanjar from 'public/khanjar.jpg';
import nautdet from 'public/nautdet.jpg';
import pnws from 'public/pnws.jpg';

const altWatch = 'Picture of a Watch';

//Also add watches as objects!
const watches = [
  {
    key: '1',
    image: watch1,
    type: 'watch',
    src: '/watch1.webp',
  },
  {
    key: 'pndet',
    image: pnws,
    type: 'watch',
    src: '/pnws.jpg',
  },
  {
    key: 'apclose',
    image: apclose,
    type: 'details',
    src: '/apclose.jpg',
  },
  {
    key: '2',
    image: watch2,
    type: 'watch',
    src: '/watch2.webp',
  },
  {
    key: '3',
    image: watch3,
    type: 'watch',
    src: '/watch3.webp',
  },
  {
    key: 'khanjar',
    image: khanjar,
    type: 'details',
    src: '/khanjar.jpg',
  },
  {
    key: '4',
    image: lapis,
    type: 'watch',
    src: '/lapis-dd.jpg',
  },
  {
    key: '5',
    image: watch5,
    type: 'watch',
    src: '/watch5.webp',
  },
  {
    key: '6',
    image: watch6,
    type: 'watch',
    src: '/watch6.jpg',
  },
  {
    key: 'nautdet',
    image: nautdet,
    type: 'details',
    src: '/nautdet.jpg',
  },

  {
    key: '7',
    image: watch7,
    type: 'watch',
    src: '/watch7.jpg',
  },
  {
    key: '8',
    image: watch8,
    type: 'watch',
    src: '/watch8.jpg',
  },
  {
    key: '9',
    image: stonedialduo,
    type: 'watch',
    src: '/stonedialduo.jpg',
  },
];

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
    key: 'details',
    display: 'Details',
  },
];

const breakpointColumnsObj = {
  default: 2,
  700: 2,
};

export function MasonryTabs() {
  const lightboxRef = useRef<LightGallery | null>(null);
  return (
    <>
      <div className="flex flex-col justify-center items-center h-full">
        <Tab.Group>
          <Tab.List className="flex justify-center items-center gap-12 py-8">
            {tabs.map((tab) => (
              <Tab key={tab.key} className="focus:outline-none">
                {({ selected }) => (
                  <span className={selected ? 'text-white' : 'text-stone-600'}>
                    {tab.display}
                  </span>
                )}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="h-full max-w-[900px] w-full">
            <Tab.Panel>
              <Masonry
                className="flex gap-4"
                columnClassName=""
                breakpointCols={breakpointColumnsObj}
              >
                {watches.map((watch, idx) => (
                  <Image
                    className="mb-4 transition-all hover:opacity-70 cursor-pointer"
                    key={watch.key}
                    src={watch.image}
                    alt={altWatch}
                    placeholder="blur"
                    onClick={() => {
                      lightboxRef.current?.openGallery(idx);
                    }}
                  />
                ))}
              </Masonry>

              <LightGalleryComponent
                onInit={(ref) => {
                  if (ref) {
                    lightboxRef.current = ref.instance;
                  }
                }}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
                dynamic
                dynamicEl={watches.map((watch) => ({
                  src: watch.src,
                  thumb: watch.src,
                }))}
              ></LightGalleryComponent>
            </Tab.Panel>
            <Tab.Panel>
              <Masonry
                className="flex gap-4"
                columnClassName=""
                breakpointCols={2}
              >
                {watches
                  .filter((watch) => watch.type == 'watch')
                  .map((filteredPhoto, idx) => (
                    <Image
                      className="mb-4 transition-all hover:opacity-70 cursor-pointer"
                      key={filteredPhoto.key}
                      src={filteredPhoto.image}
                      alt={altWatch}
                      placeholder="blur"
                      onClick={() => {
                        lightboxRef.current?.openGallery(idx);
                      }}
                    />
                  ))}
              </Masonry>
              <LightGalleryComponent
                onInit={(ref) => {
                  if (ref) {
                    lightboxRef.current = ref.instance;
                  }
                }}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
                dynamic
                dynamicEl={watches
                  .filter((watch) => watch.type == 'watch')
                  .map((filteredPhoto) => ({
                    src: filteredPhoto.src,
                    thumb: filteredPhoto.src,
                  }))}
              ></LightGalleryComponent>
            </Tab.Panel>
            <Tab.Panel>
              <Masonry
                className="flex gap-4"
                columnClassName=""
                breakpointCols={2}
              >
                {watches
                  .filter((watch) => watch.type == 'details')
                  .map((filteredPhoto, idx) => (
                    <Image
                      className="mb-4 transition-all hover:opacity-70 cursor-pointer"
                      key={filteredPhoto.key}
                      src={filteredPhoto.image}
                      alt={altWatch}
                      placeholder="blur"
                      onClick={() => {
                        lightboxRef.current?.openGallery(idx);
                      }}
                    />
                  ))}
              </Masonry>
              <LightGalleryComponent
                onInit={(ref) => {
                  if (ref) {
                    lightboxRef.current = ref.instance;
                  }
                }}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
                dynamic
                dynamicEl={watches
                  .filter((watch) => watch.type == 'details')
                  .map((filteredPhoto) => ({
                    src: filteredPhoto.src,
                    thumb: filteredPhoto.src,
                  }))}
              ></LightGalleryComponent>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  );
}
