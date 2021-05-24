import React  from "react"
import { SearchIcon  } from '@chakra-ui/icons'
import {
    InputGroup,
    Input,
    InputLeftElement,
    Stack,
  } from '@chakra-ui/react';

export default function SearchInput(props) {    
 
  return (
        <Stack spacing={4}>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input type="text" placeholder="Search"   onChange={props.onChange} />         
        </InputGroup>
      </Stack>
    )
} 


