import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Banner from './Components/Banner';
function App() {
  return (
    <ChakraProvider theme={theme}>
     <Banner />
     
    </ChakraProvider>
  );
}

export default App;
