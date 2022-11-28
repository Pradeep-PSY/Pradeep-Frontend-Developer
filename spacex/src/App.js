import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Banner from './Components/Banner';
import DataGrid from './Components/DataGrid';
import SearchForm from './Components/SearchForm';
import Pagination from './Components/Pagination';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Banner />
      <SearchForm />
      <DataGrid />
      <Pagination />
    </ChakraProvider>
  );
}

export default App;
