import {
  INavigation,
  INavigationCatChild,
  INavigationCatChild2,
} from '@components/megaMenu/megaMenu.types';

export interface IProductMenuMobile {
  isShow: boolean;
  menuSelected?: string;
  data: INavigation[];
}

export interface IProductMenuMobileItem {
  onShowSubMenu?: (
    data: INavigationCatChild2[],
    dataParent: INavigationCatChild,
  ) => void;
  data: INavigation[];
}

export interface IProductMenuMobileSub {
  onHideSubMenu?: () => void;
  data: INavigationCatChild2[];
  dataParent: INavigationCatChild;
}
