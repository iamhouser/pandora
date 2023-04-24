// pages/_app.js

// 1. import `NextUIProvider` component
import { NextUIProvider } from '@nextui-org/react';
import '../styles/Home.module.css';
import {AriaProvider} from 'react-aria'
// import {SSRProvider} from '@react-aria/ssr'
import { useSSR } from '@nextui-org/react'
import { Raleway } from 'next/font/google'




const raleway = Raleway({subsets:['latin']})

function MyApp({ Component, pageProps }) {
  const { isBrowser } = useSSR()
  // 2. Use at the root of your app
  return  isBrowser && (

      <NextUIProvider >
        <div className={raleway.className}>
        <Component {...pageProps} />
        </div>
      </NextUIProvider>


  )
}

export default MyApp
