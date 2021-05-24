import React from "react"
import { SearchInput } from '../../../components';
import {
    Box,
    HStack,
    Heading,
    Spacer,
    Flex,
    Select
  } from '@chakra-ui/react';
import { ButtonPrimary } from "../../../components/Button";

export default function CarListHeader(props) {

    const handleOnChange = (e) => {
      const value = e.target.value;
      if (props.onFilterChange) {
          props.onFilterChange(value);
      }
    }    

    return (
      <Flex>
          <HStack spacing={8}>
            <Box p={5} >
                <Heading fontSize="xl">{props.title}</Heading>
            </Box>
            <Box p={5} >
              <SearchInput onChange={(e) => props.setSearchTerm(e.target.value)}></SearchInput>
            </Box>
            <Box p={5} >
              <ButtonPrimary onClick={props.addNewCar}>+ New Car</ButtonPrimary>
            </Box>
          </HStack>
        <Spacer />
        <HStack spacing={8}>
            <Box p={5} >
                <Heading fontSize="l">Filter:</Heading>
            </Box>
            <Box p={5} >
              <Select value={props.filter} onChange={handleOnChange}>
                <option value="available">Available</option>
                <option value="all">All</option>
              </Select>
            </Box>
          </HStack>
      </Flex>      
    )
  }