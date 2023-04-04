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
  Textarea, 
  Text,
  Container,
  Grid,
  Spacer,
  Navbar,
  Image,
  Button,
  Loading,
  createTheme
} from '@nextui-org/react';

import Navigation from '../../components/navbar';
import Contacts from '../../components/contacts';
import Stack from '../../components/stack';
import Bio from '../../components/bio';
import Learning from '../../components/learning';
import Footer from '../../components/footer';
import Name from '../../components/about';
import Experience from '../../components/experience';
import Example from '../../components/example';

export default function App() {

  const darkTheme = createTheme({
    type: 'dark',
  });
  
  return (
    
  <Container style={{ margin:"0 auto", maxWidth: "900px"}} >

    <Navigation/>

    <Image
      src='/images/cover.jpg'
      alt='Defaul image'
      css={{mw:"100%"}}
      showSkeleton
    />

    <Text 
    blockquote
    css= {{textAlign:"center"}}
    >
      Hi! I am QA Engineer from Russia 🇷🇺
    </Text>

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
    <Text
      h2
      size={20}
    >
      Contacts
    </Text>

    <Contacts/>
    <Spacer/>
    <Spacer y={1}/>
    <Footer/>
    
    <Spacer y={1}/>

  </Container>



  
  );

}

