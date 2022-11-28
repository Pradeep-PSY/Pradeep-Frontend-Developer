import { Box, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { GetData } from '../Actions/Action';

const DataGrid = () => {
    const dispatch = useDispatch();
    

    useEffect(() => {
     dispatch(GetData())
    }, [])
    
  return (
    <Box>
        <Text>Grid</Text>
    </Box>
  )
}

export default DataGrid