import React from "react"
import { SearchInput } from '../../../components';
import {
    Box,
    HStack,
    Heading,
    Spacer,
    Flex
  } from '@chakra-ui/react';

export default function ListingHeader(props) {
    return (
      <Flex>
          <HStack spacing={8}>
            <Box p={5} >
                <Heading fontSize="xl">{props.title}</Heading>
            </Box>
            <Box p={5} >
              <SearchInput onChange={(e) => props.setSearchTerm(e.target.value)}></SearchInput>
            </Box>
          </HStack>
        <Spacer />
      </Flex>      
    )
  }