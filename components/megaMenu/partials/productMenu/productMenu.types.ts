import { INavigation } from '@components/megaMenu/megaMenu.types';

export interface IProductMenu {
  isShow: boolean;
  setShow: (value: boolean) => void;
  data: INavigation[];
}
