import {
    Flex,
    Box,
    Image,
    Badge,
    useColorModeValue,
    WrapItem,
    Wrap
  } from '@chakra-ui/react';
import React from 'react';
import Rating from '../Rating';
  
  
interface CardProps {
    isNew: boolean;
    imageURL: string;
    name: string;
    price: number;
    rating: number;
    numReviews: number;
}
  
  function Card(props: CardProps) {
    return (
      <Flex p={20} w="full" alignItems="center" justifyContent="center">
        <Box
          bg={useColorModeValue('white', 'gray.800')}
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative">
         <Image
            src={props.imageURL}
            alt={`Picture of ${props.name}`}
            roundedTop="lg"
          />
  
          <Box p="6">
            <Box d="flex" alignItems="baseline">
              {props.isNew && (
                <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                  New
                </Badge>
              )}
            </Box>
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="2xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated>
                {props.name}
              </Box>              
            </Flex>
  
            <Flex justifyContent="space-between" alignContent="center">
              <Rating rating={props.rating} numReviews={props.numReviews} />
              <Box ml={4} fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
                <Box as="span" color={'gray.600'} fontSize="lg">
                  £
                </Box>
                {props.price.toFixed(2)}
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
    );
  }
  

function CardList(props) {
  return (
    <Wrap>
    { 
      props.cards.map(card => {
        return (
        <WrapItem key={card.name} >
          <Card {...card}></Card>
        </WrapItem>
      )})
    }
    </Wrap>
  );
}

export { CardList, Card };