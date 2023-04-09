import * as React from 'react';

// // 1. import `NextUIProvider` component
// import { NextUIProvider } from '@nextui-org/react';

// function App({ Component }) {
//   // 2. Use at the root of your app
//   return (
//     <NextUIProvider>
//       <Component />
//     </NextUIProvider>
    
//   );
// }



import { 
  Text,
  Container,
  Spacer,
  Image,
  CreateTheme
} from '@nextui-org/react';

import Navigation from '../../assets/components/navbar';
import Contacts from '../../assets/components/contacts';
import Stack from '../../assets/components/stack';
import Bio from '../../assets/components/bio';
import Learning from '../../assets/components/learning';
import Footer from '../../assets/components/footer';
import Name from '../../assets/components/about';
import Experience from '../../assets/components/experience';
import Example from '../../assets/components/example';
import { ImageLoader } from '../../assets/components/imageLoader';


export default function App() {


  
  return (
    
  <Container style={{ margin:"0 auto", maxWidth: "900px"}} >

    <Navigation/>

    <Image
      src='images/cover.jpg'
      alt='Defaul image'
      css={{mw:"100%"}}
      showSkeleton
    />

    {/* <ImageLoader

    /> */}

    <Text blockquote css= {{textAlign:"center"}}>Hi! I am QA Engineer from Russia 🇷🇺 </Text>

    <Name/>
    <Spacer y={1}/>

    <Bio/>
    <Spacer y={1}/>
    
    <Experience/>

    <Stack/>
    <Spacer y={1}/>

    <Learning/>
    <Spacer y={1}/>

    <Example/>

    <Contacts/>
    <Spacer y={1}/>

    <Footer/>
    <Spacer y={1}/>

  </Container>



  
  );

}

