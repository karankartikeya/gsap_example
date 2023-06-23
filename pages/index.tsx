import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useRef, useState, useEffect } from "react";
import { AnimatePresence } from 'framer-motion'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { ThemeProvider } from 'styled-components'
import ScrollTriggerProxy from '@/components/ScrollTriggerProxy';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const containerRef = useRef(null);
  const [Loaded, setLoaded] = useState(false);
  return (
    <>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          // ... all available Locomotive Scroll instance options
          smartphone: {
            smooth: true,
          },
          tablet: {
            smooth: true,
          },
        }}
        watch={
          [
            //..all the dependencies you want to watch to update the scroll.
            //  Basicaly, you would want to watch page/location changes
            //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
          ]
        }
        containerRef={containerRef}
      >
        <AnimatePresence>{Loaded ? null : null}</AnimatePresence>
        <main className="App" data-scroll-container ref={containerRef}>
          <ScrollTriggerProxy />
          <AnimatePresence>
            {Loaded ? null : null}

            <Home key="home" />
            <About key="about" />
            <Shop key="Shop" />
            <Marquee key="marquee" />
            <NewArrival key="new arrival" />
            <Footer key="Footer" />
          </AnimatePresence>
        </main>
      </LocomotiveScrollProvider>
    </>
  )
}
