import { Container, Link } from "@chakra-ui/layout";
import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  // useBreakpointValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import NextLink from "next/link";
import { HiChevronDown, HiMenu, HiOutlineUser, HiX } from "react-icons/hi";
import { ProductMenu } from "./partials/productMenu";
import { ProductMenuMobile } from "./partials/productMenuMobile";
import { IProps } from "./megaMenu.types";
import { imageLazy } from "@utils/constant";

export const MegaMenu: React.FC<IProps> = ({
  menuSelected,
  dataNavigation,
  isLogin,
}) => {
  const [showProductsMenu, setShowProductsMenu] = useState<boolean>(false);
  const [showProductsMenuMobile, setShowProductsMenuMobile] =
    useState<boolean>(false);
  const isMobile = false; //useBreakpointValue({ base: true, xl: false });

  return (
    <Box
      bg="white"
      position="fixed"
      top="0"
      w="100%"
      zIndex="100"
      shadow="0px 6px 9px rgba(46, 67, 77, 0.08)"
      as="nav"
      h="64px"
    >
      <Container
        as={Stack}
        d="flex"
        maxW="container.xl"
        py="3"
        zIndex="9"
        h="full"
        justifyContent="center"
      >
        <HStack>
          <HStack>
            <Box
              d={{ base: "block", xl: "none" }}
              mr={{ base: "2", xl: "0" }}
              cursor="pointer"
              onClick={() => setShowProductsMenuMobile(!showProductsMenuMobile)}
            >
              {showProductsMenuMobile ? (
                <HiX size="24px" />
              ) : (
                <HiMenu size="24px" />
              )}
            </Box>
            <NextLink href="/" passHref>
              <Image
                src="https://i.ibb.co/VtgTZPb/logo-myc-full-h-2x.png"
                fallbackSrc={imageLazy}
                alt="MyCarrier"
                h="32px"
                w="139px"
                cursor="pointer"
              />
            </NextLink>
          </HStack>
          <HStack
            flex="1"
            pl={{ base: "0", xl: "20" }}
            justifyContent={{ base: "flex-end", xl: "revert" }}
          >
            <HStack flex="1" spacing="12" d={{ base: "none", xl: "flex" }}>
              <Box
                d="flex"
                alignItems="center"
                _hover={{
                  color: "red.600",
                  cursor: "pointer",
                }}
                onClick={() => setShowProductsMenu(!showProductsMenu)}
              >
                <Text
                  fontSize="md"
                  mr="2"
                  color={
                    (menuSelected === "product" || showProductsMenu) &&
                    "red.500"
                  }
                >
                  Products & Services
                </Text>
                <Box
                  transition="transform .2s,-webkit-transform .2s"
                  color={
                    (menuSelected === "product" || showProductsMenu) &&
                    "red.500"
                  }
                >
                  <HiChevronDown fontSize="18px" />
                </Box>
              </Box>
              <NextLink href="/about" passHref>
                <Link color={menuSelected === "about" && "red.500"}>
                  <Text fontSize="md">About Us</Text>
                </Link>
              </NextLink>
              <NextLink href="/article" passHref>
                <Link color={menuSelected === "article" && "red.500"}>
                  <Text fontSize="md">Article</Text>
                </Link>
              </NextLink>
              <NextLink href="/contact" passHref>
                <Link color={menuSelected === "contact" && "red.500"}>
                  <Text fontSize="md">Contact Us</Text>
                </Link>
              </NextLink>
            </HStack>
            <HStack spacing="2" pl="4" ml="auto">
              {isLogin ? (
                <Menu placement="bottom-end">
                  {({ isOpen }) => (
                    <>
                      <MenuButton
                        color={isOpen && "red.500"}
                        _hover={{ color: "red.500" }}
                      >
                        <Flex align="center">
                          <HiOutlineUser size="20px" />
                          <Text
                            ml="2"
                            mr="1"
                            isTruncated
                            maxW={{ base: "72px", md: "240px" }}
                          >
                            Ivan Adipradana
                          </Text>
                          <HiChevronDown />
                        </Flex>
                      </MenuButton>
                      <MenuList minW="160px">
                        <MenuItem _hover={{ color: "red.500" }}>
                          Profile
                        </MenuItem>
                        <MenuItem _hover={{ color: "red.500" }}>
                          Logout
                        </MenuItem>
                      </MenuList>
                    </>
                  )}
                </Menu>
              ) : (
                <>
                  <Button variant="outline">Login</Button>
                  <Button d={{ base: "none", xl: "revert" }}>Register</Button>
                </>
              )}
            </HStack>
          </HStack>
        </HStack>
      </Container>
      {isMobile ? (
        <ProductMenuMobile
          isShow={showProductsMenuMobile}
          menuSelected={menuSelected}
          data={dataNavigation}
        />
      ) : (
        <ProductMenu
          isShow={showProductsMenu}
          setShow={setShowProductsMenu}
          data={dataNavigation}
        />
      )}
    </Box>
  );
};

export default MegaMenu;
