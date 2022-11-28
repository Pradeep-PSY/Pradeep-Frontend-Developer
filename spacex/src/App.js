import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Banner from './Components/Banner';
import DataGrid from './Components/DataGrid';
import SearchForm from './Components/SearchForm';
function App() {
  return (
    <ChakraProvider theme={theme}>
     <Banner />
     <SearchForm />
     <DataGrid />
    </ChakraProvider>
  );
}

export default App;
