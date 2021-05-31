import { Box, Link } from '@chakra-ui/react';
import React from 'react';
import NextLink from 'next/link';
import { ProductMenuSub } from './productMenuSub';
import { ProductOne, ProductOneWrapper } from '../productMenu.styles';
import {
  INavigation,
  INavigationCatChild,
} from '@components/megaMenu/megaMenu.types';

export const menuChild1 = (menu: INavigation) => {
  if (menu.catChild) {
    return (
      <ProductOneWrapper>
        {menu.catChild.map((catOne: INavigationCatChild, index: number) => (
          <ProductOne key={`nav-product-desktop-one-${index}${catOne.catId}`}>
            <Box w="280px">
              <NextLink href={catOne.catPath} passHref>
                <Link py="4" px="12" d="block" fontSize="lg">
                  {catOne.catName}
                </Link>
              </NextLink>
            </Box>
            {menuChild2(catOne)}
          </ProductOne>
        ))}
      </ProductOneWrapper>
    );
  }
};

export const menuChild2 = (catOne: INavigationCatChild) => {
  if (catOne.catChild) {
    return <ProductMenuSub catOne={catOne} />;
  }
};

export const ProductMenuItem = (data: INavigation[]) => {
  return data.map((menu: INavigation) => ({
    key: '_' + menu.catId,
    label: (
      <NextLink href={menu.catPath}>
        <Link p="4" d="block" fontSize="lg">
          {menu.catName}
        </Link>
      </NextLink>
    ),
    items: menuChild1(menu),
  }));
};
