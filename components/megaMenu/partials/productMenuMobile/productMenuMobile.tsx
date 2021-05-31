import { Link } from '@chakra-ui/layout';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import NextLink from 'next/link';
import { ProductMenuMobileItem, ProductMenuMobileSub } from './partials';
import { IProductMenuMobile } from './productMenuMobile.types';
import { INavigationCatChild, INavigationCatChild2 } from '@components/megaMenu/megaMenu.types';

export const ProductMenuMobile: React.FC<IProductMenuMobile> = ({ isShow, menuSelected, data }) => {
  const [isShowSub, setIsShowSub] = useState<boolean>(false);
  const [catTwo, setCatTwo] = useState<INavigationCatChild2[]>([]);
  const [dataParent, setDataParent] = useState<INavigationCatChild>(null);
  const onShowSubMenu = (child: INavigationCatChild2[], parent: INavigationCatChild) => {
    setIsShowSub(true);
    setCatTwo(child);
    setDataParent(parent);
  };
  const onHideSubMenu = () => {
    setIsShowSub(false);
  };
  return (
    isShow && (
      <>
        <Box
          pos="absolute"
          top="100%"
          bg="white"
          left="0"
          right="0"
          zIndex="9"
          overflowY="auto"
          maxH="calc(100vh - 64px)"
          borderTop="1px solid"
          borderTopColor="border"
        >
          {isShowSub ? (
            <ProductMenuMobileSub
              onHideSubMenu={onHideSubMenu}
              data={catTwo}
              dataParent={dataParent}
            />
          ) : (
            <>
              <Accordion allowToggle>
                <AccordionItem borderTop="0">
                  <AccordionButton _expanded={{ color: 'red.500' }} py="4">
                    <Box
                      flex="1"
                      textAlign="left"
                      fontSize="md"
                      fontWeight="bold"
                      color={menuSelected == 'product' && 'red.500'}
                    >
                      Products & Services
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel p="0" borderBottom="0">
                    <ProductMenuMobileItem onShowSubMenu={onShowSubMenu} data={data} />
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
              <Box borderBottom="1px solid" borderBottomColor="border">
                <NextLink href="/about" passHref>
                  <Link p="4" d="block" color={menuSelected === 'about' && 'red.500'}>
                    <Text fontSize="md" fontWeight="bold">
                      About Us
                    </Text>
                  </Link>
                </NextLink>
              </Box>
              <Box borderBottom="1px solid" borderBottomColor="border">
                <NextLink href="/article" passHref>
                  <Link p="4" d="block" color={menuSelected === 'article' && 'red.500'}>
                    <Text fontSize="md" fontWeight="bold">
                      Article
                    </Text>
                  </Link>
                </NextLink>
              </Box>
              <Box borderBottom="1px solid" borderBottomColor="border">
                <NextLink href="/contact" passHref>
                  <Link p="4" d="block" color={menuSelected === 'contact' && 'red.500'}>
                    <Text fontSize="md" fontWeight="bold">
                      Contact Us
                    </Text>
                  </Link>
                </NextLink>
              </Box>
            </>
          )}
        </Box>
        <Box
          pos="fixed"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="rgba(0,0,0,0.64)"
          opacity={isShow ? '1' : '0'}
          visibility={isShow ? 'visible' : 'hidden'}
          transition="all 0.2s"
          zIndex="2"
          mt="64px"
        />
      </>
    )
  );
};
