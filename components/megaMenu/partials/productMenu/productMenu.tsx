import { Container } from "@chakra-ui/layout";
import React from "react";
import { useEffect, useRef } from "react";
import { ReactMegaMenu } from "react-mega-menu";
import { ProductMenuItem } from "./partials";
import { IProductMenu } from "./productMenu.types";

export const styleConfig = {
  menuProps: {
    style: {
      backgroundColor: "#fff",
      margin: 0,
    },
  },
  contentProps: {
    style: {
      borderLeft: "1px solid #D2DADE",
    },
  },
  menuItemProps: {
    style: {
      width: 280,
    },
  },
  menuItemSelectedProps: {
    style: {
      cursor: "pointer",
      borderRight: "2px solid #DE1B1B",
      width: 280,
      color: "#DE1B1B",
    },
  },
  containerProps: {
    style: {
      top: 4,
      zIndex: 10,
      backgroundColor: "#fff",
      padding: "48px 32px",
      boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.12)",
      borderRadius: 20,
      maxWidth: "calc(1280px - 96px)",
    },
  },
};

export const ProductMenu: React.FC<IProductMenu> = ({
  isShow,
  setShow,
  data,
}) => {
  const reactMegaMenuRef = useRef<any>(null);

  const onWindowClick = (e: any) => {
    e.stopPropagation();
    if (
      isShow &&
      reactMegaMenuRef?.current?.instance &&
      !reactMegaMenuRef.current.instance.current.contains(e.target)
    ) {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", onWindowClick);
    return () => window.removeEventListener("click", onWindowClick);
  });

  return (
    <>
      {isShow && (
        <Container maxW="calc(1280px - 96px)" pos="relative">
          <ReactMegaMenu
            ref={reactMegaMenuRef}
            tolerance={50}
            styleConfig={styleConfig}
            data={ProductMenuItem(data)}
          />
        </Container>
      )}
    </>
  );
};
