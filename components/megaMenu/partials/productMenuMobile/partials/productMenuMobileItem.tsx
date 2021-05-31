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
import { HiChevronRight } from 'react-icons/hi';
import { IProductMenuMobileItem } from '../productMenuMobile.types';
import { INavigation, INavigationCatChild } from '@components/megaMenu/megaMenu.types';

export const ProductMenuMobileItem: React.FC<IProductMenuMobileItem> = ({
  onShowSubMenu,
  data,
}) => {
  return (
    <Accordion allowToggle>
      {data.map((item: INavigation) => (
        <AccordionItem borderBottom="0">
          <AccordionButton _expanded={{ color: 'red.500' }} py="4" pl="8">
            <Box flex="1" textAlign="left" fontSize="sm" fontWeight="bold">
              <NextLink href={item.catPath} passHref>
                <Link d="block" flex="1" onClick={(event) => event.stopPropagation()} mr="8">
                  {item.catName}
                </Link>
              </NextLink>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          {item.catChild && (
            <AccordionPanel p="0" pos="relative" borderBottom="0">
              {item.catChild.map((catOne: INavigationCatChild) => (
                <Flex
                  align="center"
                  justify="space-between"
                  pl="12"
                  py="4"
                  pr="4"
                  borderTop="1px solid"
                  borderTopColor="border"
                >
                  <NextLink href={catOne.catPath} passHref>
                    <Link d="block" flex="1">
                      <Text fontSize="sm" fontWeight="bold">
                        {catOne.catName}
                      </Text>
                      <Text fontSize="xs" color="red.500">
                        View Detail
                      </Text>
                    </Link>
                  </NextLink>
                  <HiChevronRight
                    size="18px"
                    onClick={() => onShowSubMenu(catOne?.catChild, catOne)}
                  />
                </Flex>
              ))}
            </AccordionPanel>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
};
