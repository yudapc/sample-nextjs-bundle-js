import { Box, Spinner } from '@chakra-ui/react';
import React from 'react';
import LazyLoad from 'react-lazyload';
import { ILazy } from './lazy.types';

const Placeholder = () => {
  return (
    <Box w="full" pos="relative" h="200px">
      <Spinner
        color="red.500"
        pos="absolute"
        left="50%"
        top="50%"
        transform="translate(-50%,-50%)"
        size="lg"
      />
    </Box>
  );
};

export const Lazy: React.FC<ILazy> = ({ children, overflow }) => {
  return (
    <LazyLoad
      height={200}
      overflow={overflow}
      once
      placeholder={<Placeholder />}
      debounce={150}
    >
      {children}
    </LazyLoad>
  );
};

export default Lazy;
