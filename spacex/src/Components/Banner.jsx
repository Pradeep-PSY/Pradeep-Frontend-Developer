import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
    Link,
  } from '@chakra-ui/react';
  

const Banner = () =>{
    return (
        <Flex
          w={'full'}
          h={'100vh'}
          backgroundImage={
            'url(https://blogs.nasa.gov/spacex/wp-content/uploads/sites/227/2020/12/KSC-20201206-PH-KLS01_0083-768x512.jpg)'
          }
          backgroundSize={'cover'}
          backgroundPosition={'center center'}>
          <VStack
            w={'full'}
            justify={'center'}
            px={useBreakpointValue({ base: 4, md: 8 })}
            bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
            <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
              <Text
                color={'white'}
                fontWeight={500}
                lineHeight={1.2}
                fontSize={useBreakpointValue({ base: '2xl', md: '3xl' })}>
                Space Exploration Technologies Corp. is an American spacecraft manufacturer, launcher, and a satellite communications corporation headquartered in Hawthorne, California.
              </Text>
              <Stack direction={'row'}>
                
                <Button
                  bg={'whiteAlpha.300'}
                  rounded={'full'}
                  as={Link}
                  isExternal
                  href='https://www.spacex.com/'
                  color={'white'}
                  _hover={{ bg: 'whiteAlpha.600' }}>
                  Show me more
                </Button>
              </Stack>
            </Stack>
          </VStack>
        </Flex>
    );
}

export default Banner