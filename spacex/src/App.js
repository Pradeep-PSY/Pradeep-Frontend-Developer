import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Banner from './Components/Banner';
import DataGrid from './Components/DataGrid';
function App() {
  return (
    <ChakraProvider theme={theme}>
     <Banner />
     <DataGrid />
    </ChakraProvider>
  );
}

export default App;
