export interface IProductSubtitleProps {
  subtitleClassName?: string;
  subtitleRectClassName?: string;
}

export interface IProductItemActionBtnProps {
  text: string;
  iconClass: string;
  callback?: () => void;
  withTooltip?: boolean;
  marginBottom?: number;
}

export interface IProductAvailableProps {
  vendorCode: string;
  inStock: number;
}