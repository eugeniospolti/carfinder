import { Box } from '@chakra-ui/react';
import { CarOverview } from '../features/cars';

export default function cars() {
  return (
    <>
      <Box px={6} py={4}>
        <CarOverview></CarOverview>
      </Box>
     </>
  );
}