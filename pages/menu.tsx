import React from "react";
import { MegaMenu } from "@components/megaMenu";
import { dataNavigation } from "@data/navigation";

const Menu: React.FC = () => {
  return <MegaMenu menuSelected="" dataNavigation={dataNavigation} />;
};
export default Menu;
