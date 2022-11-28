import { Flex, Select } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { GetFilteredData } from '../Actions/Action';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

const SearchForm = () => {
    const [status, setStatus] = useState('');
    const [type, setType] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e) => {
        let { name, value } = e.target;

        if (name === 'status') {
            setStatus(value)
            dispatch(GetFilteredData(value, type))
        }
        else if (name === 'type') {
            setType(value)
            dispatch(GetFilteredData(status, value))
        }

        console.log(status, type)
    }
    return (
        <Flex m='3'>
            <Select placeholder='Select Status' name='status' m='4' onChange={(e) => handleChange(e)}>
                <option value='retired'>Retired</option>
                <option value='active'>Active</option>
                <option value='destroyed'>Destroyed</option>
            </Select>
            <Select placeholder='Select Type' name='type' m='4' onChange={(e) => handleChange(e)}>
                <option value='Dragon 1.0'>Dragon 1.0</option>
                <option value='Dragon 1.1'>Dragon 1.1</option>
                <option value='Dragon 2.0'>Dragon 2.0</option>
            </Select>
            <ColorModeSwitcher />

        </Flex>
    )
}

export default SearchForm