import { Button, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { GetData } from '../Actions/Action';

const Pagination = () => {
    const [count, setCount] = useState(1);
    const dispatch = useDispatch();

    const handleDecrement = () =>{
        setCount(count - 1);
        dispatch(GetData({page:true,limit:7}))
    }

    const handleIncrement = () =>{
        setCount(count + 1);
        dispatch(GetData({page:true,limit:10}))
    }

    return (
        <Flex textAlign={'center'} justify='center' >
            <Button disabled={count == 1} onClick={handleDecrement} m='2'>-</Button>
            <Text m='2'>{count}</Text>
            <Button disabled={count == 2} onClick={handleIncrement} m='2'>+</Button>
        </Flex>
    )
}

export default Pagination