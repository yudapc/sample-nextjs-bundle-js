import { Link } from '@chakra-ui/layout';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import NextLink from 'next/link';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { IProductMenuMobileSub } from '../productMenuMobile.types';
import { ProductImage } from '@components/productImage';
import { INavigationCatChild2, INavigationProduct } from '@components/megaMenu/megaMenu.types';

export const ProductMenuMobileSub: React.FC<IProductMenuMobileSub> = ({
  onHideSubMenu,
  data,
  dataParent,
}) => {
  return (
    <Box>
      <Flex align="center" justify="center" p="4">
        <HiArrowNarrowLeft size="18px" onClick={onHideSubMenu} />
        <NextLink href="#" passHref>
          <Link d="block" fontSize="md" fontWeight="bold" flex="1" ml="4">
            {dataParent.catName}
          </Link>
        </NextLink>
      </Flex>
      <Accordion allowToggle>
        {data
          .filter((item) => item.products.length > 0)
          .map((item: INavigationCatChild2) => (
            <AccordionItem key={`nav-product-mobile-${item.catId}${item.catName}`}>
              <AccordionButton _expanded={{ color: 'red.500' }} py="4">
                <Box flex="1" textAlign="left" fontSize="sm" fontWeight="bold">
                  <NextLink href="/#" passHref>
                    <Link d="block" flex="1" onClick={(event) => event.stopPropagation()} mr="8">
                      {item.catName}
                    </Link>
                  </NextLink>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              {item.products.map((product: INavigationProduct) => (
                <AccordionPanel py="4" pl="8" borderBottom="0">
                  <Text fontSize="xs">{product.productName}</Text>
                  <ProductImage
                    data={[
                      {
                        imageUrl: product.productImage.mediaPath,
                        link: product.productPath,
                        title: product.productName,
                        description: product.productName,
                      },
                    ]}
                    isSmall
                  />
                </AccordionPanel>
              ))}
            </AccordionItem>
          ))}
      </Accordion>
    </Box>
  );
};
