import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import {
  ProductTwoWrapper,
  ProductTwoContent,
  ProductTwo,
} from '../productMenu.styles';
import { ProductImage } from '@components/productImage';
import {
  INavigationCatChild,
  INavigationCatChild2,
  INavigationProduct,
} from '@components/megaMenu/megaMenu.types';

interface IProps {
  catOne: INavigationCatChild;
}

export const dataProducts = (products: INavigationProduct[]) => {
  return products.map((product: INavigationProduct) => ({
    title: product.productName,
    description: '',
    link: product.productPath,
    imageUrl: product.productImage?.mediaPath,
  }));
};

export const ProductMenuSub = ({ catOne }: IProps) => {
  return (
    <ProductTwoWrapper>
      <ProductTwoContent>
        <ProductTwo>
          <VStack spacing="8" align="stretch" h="full">
            {catOne.catChild
              .filter((catTwo) => catTwo.products.length > 0)
              .map((catTwo: INavigationCatChild2, index: number) => (
                <Box
                  color="font.ink"
                  key={`nav-product-desktop-two-${index}${catTwo.catId}`}
                >
                  <Heading as="h5" fontSize="lg" mb="1">
                    {catTwo.catName}
                  </Heading>
                  <Text fontSize="xs">{catTwo.catDesc}</Text>
                  {catTwo.products && (
                    <ProductImage data={dataProducts(catTwo.products)} />
                  )}
                </Box>
              ))}
          </VStack>
        </ProductTwo>
      </ProductTwoContent>
    </ProductTwoWrapper>
  );
};
