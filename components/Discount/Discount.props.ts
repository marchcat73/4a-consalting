import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface DiscountProps extends DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  percent: string;
}
