import { Box, Button, ButtonGroup, Divider,  GridItem, Heading, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, SimpleGrid, Stack, Text, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetData } from '../Actions/Action';
import { Card, CardBody, CardFooter } from '@chakra-ui/react'

const DataGrid = () => {
    const dispatch = useDispatch();
    const { data } = useSelector(state => state.data);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [readmore, setReadMore] = useState({});

    const handleReadMore = (data) => {
        setReadMore(data)
        onOpen();
    }


    console.log(data)
    useEffect(() => {
        dispatch(GetData({page:true,limit:7}))
    }, [])

    return (
        <Box m='4'>
            <SimpleGrid minChildWidth='300px' spacing='40px' >
                {
                    data.length > 0 ? (


                        data && data.map((el, i) => (
                            <GridItem key={i} >

                                <Card maxW='sm'>
                                    <CardBody >
                                        <Image
                                            src='https://images.squarespace-cdn.com/content/v1/54cbd36ae4b0cc1bb3fd8657/1439483297772-V55HNN2QDOD6UA1OHTSH/elon_spacex-e1419882308278.png'
                                            alt='spacex image'
                                            borderRadius='lg'
                                        />
                                        <Stack mt='6' spacing='3'>
                                            <Heading size='md' color='teal'>SPACEX CAPSULE LAUNCHES</Heading>
                                            <Text fontSize='xl' color='black.400' fontWeight='bold'>
                                                {el.details || 'It was founded in 2002 by Elon Musk.'}
                                            </Text>
                                            <Text color='' fontWeight='bold' fontSize='sm'>
                                                Type: {el.type.toUpperCase()}
                                            </Text>
                                            <Text color='' fontWeight='bold' fontSize='sm'>
                                                Status: {el.status.toUpperCase()}
                                            </Text>
                                            <Text color='' fontWeight='bold' fontSize='sm'>
                                                Original_Launch: {el.original_launch && el.original_launch.split('T')[0] || '---'}
                                            </Text>
                                        </Stack>
                                    </CardBody>
                                    <Divider />
                                    <CardFooter >
                                        <ButtonGroup spacing='2' >
                                            <Button variant='solid' colorScheme='blue' onClick={() => handleReadMore(el)}>
                                                Read more...
                                            </Button>

                                        </ButtonGroup>
                                    </CardFooter>
                                </Card>
                            </GridItem>
                        ))


                    ) : (
                        <Box >
                            <Text fontSize={'xl'} fontWeight="bold">Data does exist to Show or Some Error may be occured</Text>
                        </Box>
                    )
                }

            </SimpleGrid>

            <Modal onClose={onClose} size={'md'} isOpen={isOpen}>
                <ModalOverlay bg='none'
                    backdropFilter='auto'
                    backdropInvert='80%'
                    backdropBlur='2px' />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>

                        <Text>Capsule_Id: {readmore.capsule_id}</Text>
                        <Text>Capsule_Serial: {readmore.capsule_serial}</Text>
                        <Text>Landings: {readmore.landings}</Text>
                        <Text fontWeight={'bold'} fontSize={'xl'}>Missions</Text>
                        <Text>Name: {readmore.missions && readmore.missions.length > 0 && readmore.missions[0].name || 'None'}</Text>
                        <Text>Flight: {readmore.missions && readmore.missions.length > 0 && readmore.missions[0].flight || 'None'}</Text>

                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}

export default DataGrid