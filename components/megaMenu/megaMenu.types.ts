export interface IProps {
  menuSelected?: string;
  dataNavigation: INavigation[];
  isLogin?: boolean;
}
export interface INavigation {
  catId: number;
  levelId: number;
  catName: string;
  catSlug: string;
  catPath: string;
  catChild: INavigationCatChild[];
}

export interface INavigationCatChild {
  catId: number;
  levelId: number;
  catName: string;
  catSlug: string;
  catPath: string;
  catChild: INavigationCatChild2[];
}

export interface INavigationCatChild2 {
  catId: number;
  levelId: number;
  catName: string;
  catDesc: string;
  catSlug: string;
  catPath: string;
  products: INavigationProduct[];
}

export interface INavigationProduct {
  _id: string;
  id: number;
  productName: string;
  productSlug: string;
  productPath: string;
  productImage: INavigationProductImage;
  isDisplay: boolean;
}

export interface INavigationProductImage {
  mediaId: string;
  mediaName: string;
  mediaPath: string;
}
