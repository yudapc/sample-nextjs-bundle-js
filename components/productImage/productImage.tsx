import { AspectRatio, Box, Grid, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { IProductImage } from './productImage.types';
import NextLink from 'next/link';
import { Lazy } from '@components/lazy';
import { imageLazy } from '@utils/constant';

export const ProductImage: React.FC<IProductImage> = ({ data, isExplore, isSmall, isAutoFit }) => {
  const items = data.map((item, index: number) => (
    <NextLink key={`product-image-${index}`} href={item.link}>
      <Box
        as="a"
        pos="relative"
        rounded="md"
        transition="transform .3s"
        cursor="pointer"
        {...(isExplore && {
          _hover: {
            transform: 'scale(1.2)',
            zIndex: 9,
          },
        })}
        _before={{
          background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.7) 23.5%, rgba(0, 0, 0, 0) 100%)',
          content: '""',
          pos: 'absolute',
          bottom: '0',
          left: '0',
          right: '0',
          height: 'full',
          zIndex: '1',
          borderBottomRadius: 'md',
        }}
      >
        <Lazy overflow={!isExplore}>
          <AspectRatio ratio={isExplore ? 3.5 / 4 : isSmall ? 3 / 1 : 2 / 1}>
            <Image
              rounded="md"
              src={item.imageUrl}
              fallbackSrc={imageLazy}
              alt={item.title}
              objectFit="cover"
            />
          </AspectRatio>
        </Lazy>
        <Box
          pos="absolute"
          bottom="0"
          left="0"
          right="0"
          color="white"
          zIndex="2"
          px="4"
          {...(isExplore
            ? {
                py: { base: '4', md: '8' },
              }
            : {
                py: '4',
              })}
        >
          <Heading
            as="span"
            d="block"
            {...(isExplore
              ? {
                  textAlign: 'center',
                  fontSize: { base: 'md', xl: 'xl' },
                }
              : isAutoFit
              ? {
                  fontSize: 'xl',
                }
              : {
                  fontSize: 'md',
                })}
          >
            {item.title}
          </Heading>
          {item.description && (
            <Text
              noOfLines={isAutoFit ? 1 : 2}
              isTruncated
              fontSize={isAutoFit ? 'sm' : 'xs'}
              mt="1"
            >
              {item.description}
            </Text>
          )}
        </Box>
      </Box>
    </NextLink>
  ));
  return (
    <Grid
      {...(isExplore
        ? {
            gridTemplateColumns: { base: '1fr 1fr', md: 'repeat(4, 1fr)' },
            gap: { base: '2', md: '4' },
          }
        : isSmall
        ? {
            gridTemplateColumns: '1fr',
            gap: '4',
            mt: '2',
          }
        : isAutoFit
        ? {
            gridTemplateColumns: {
              base: '1fr',
              md: 'repeat(auto-fit, minmax(20%, 1fr))',
            },
            gap: '4',
            mt: '2',
          }
        : {
            gridTemplateColumns: '1fr 1fr',
            gap: '4',
            mt: '2',
          })}
    >
      {items}
    </Grid>
  );
};

export default ProductImage;
