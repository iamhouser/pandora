// pages/_app.js

// 1. import `NextUIProvider` component
import { NextUIProvider } from '@nextui-org/react';
import '../styles/Home.module.css';
import {AriaProvider} from 'react-aria'
// import {SSRProvider} from '@react-aria/ssr'
import { useSSR } from '@nextui-org/react'



function MyApp({ Component, pageProps }) {
  const { isBrowser } = useSSR()
  // 2. Use at the root of your app
  return  isBrowser && (

      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>


  )
}

export default MyApp
