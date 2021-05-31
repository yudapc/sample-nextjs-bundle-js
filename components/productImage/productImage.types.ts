type IProductImageItem = {
  title?: string;
  link?: string;
  description?: string;
  imageUrl?: string;
};

export interface IProductImage {
  data: IProductImageItem[];
  isExplore?: boolean;
  isSmall?: boolean;
  isAutoFit?: boolean;
}
