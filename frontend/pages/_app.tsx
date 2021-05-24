import { ChakraProvider } from "@chakra-ui/react"
import theme from '../theme/cazoo.theme';
import { ReactNode, useEffect } from 'react';
import { FaCar } from "react-icons/fa"
import {
  Text,
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Icon,
  useDisclosure,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon} from '@chakra-ui/icons';
 
import { NavLink } from '../components';

const Links = [{ text :'Find cars', url: '/cars'}];


function CarApp({ Component, pageProps }) {
  const { isOpen, onOpen, onClose } = useDisclosure(); 
  
  return (
    <ChakraProvider theme={theme}>
      <Box px={4} borderBottom="solid" borderBottomWidth="1px" borderColor="gray.300">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Link px={2} py={1} _hover={{textDecoration: 'none'}} href={"/"}>
                <Icon as={FaCar} h={8} w={8} color='brand.normal' />
              </Link>
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link.text} url={link.url} text={link.text}></NavLink>
              ))}
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.text} url={link.url} text={link.text}></NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box px={6} py={4}>
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  )
}

export default CarApp