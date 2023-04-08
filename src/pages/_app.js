// pages/_app.js

// 1. import `NextUIProvider` component
import { NextUIProvider } from '@nextui-org/react';
import '../styles/Home.module.css';
import { useSSR } from '@nextui-org/react'
import { SSRProvider } from '@react-aria/ssr';

function MyApp({ Component, pageProps }) {

  // 2. Use at the root of your app
  return  (
    <SSRProvider>
    {  <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>}
    </SSRProvider>
  )
}

export default MyApp
