import React, { useState } from "react"
import {
    Box,
    Flex,
    Spacer,
    Heading,
    Select,
    HStack,
    Button
  } from '@chakra-ui/react';
  import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'

interface IPaginationProps {
    page: number;
    setPage: any;
    totalCount: number;
    rowsPerPage: number;
    onChange: any;
}

export default function Pagination(props: IPaginationProps ) {

    const totalPages = Math.ceil(props.totalCount/props.rowsPerPage);

    const handleOnChange = (e) => {
        const value = +e.target.value;
        if (props.onChange) {
            props.onChange(value);
        }
    }    

    const handleChangePageDec = (e) => {
        
        if (props.setPage && props.page > 0 )
            props.setPage(props.page-1);            
    }    

    const handleChangePageInc = (e) => {
        if (props.setPage &&  props.page < totalPages-1 )
          props.setPage(props.page+1);       
    }    


    return (  
        <Flex>
            <Box p={5}>
            {
                  props.totalCount > props.rowsPerPage ?
                <HStack>
                    <Box>
                        <Button bg="transparent" id='dec' onClick={handleChangePageDec} >
                            <ArrowLeftIcon></ArrowLeftIcon>
                        </Button>
                    </Box>
                    <Box>
                     <Heading fontSize="sm" >{ `Page ${props.page+1} of ${totalPages}` }</Heading>
                    </Box>
                    <Box>
                        <Button bg="transparent" id='inc' onClick={handleChangePageInc}>
                        <ArrowRightIcon></ArrowRightIcon>
                        </Button>
                    </Box>
                </HStack>
                : null
            }
            </Box>
        <Spacer />
        <Box p={5}>
            <HStack>
                <Box>
                    <Heading fontSize="sm" >Rows per page</Heading>
                </Box>
                <Box>
                    <Select value={props.rowsPerPage} onChange={handleOnChange}>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                    </Select>
                </Box>
            </HStack>
        </Box>
        </Flex>
    )
}