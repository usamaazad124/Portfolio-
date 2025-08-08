"use client"

import dynamic from 'next/dynamic';

const Experience = dynamic(() => import('./experience'), {
  ssr: false
});

const Education = dynamic(() => import('./education'), {
  ssr: false
});

export default function ClientSections() {
  return (
    <>
      <Experience />
      <Education />
    </>
  );
} 