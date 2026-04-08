import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { TariffsResponse } from '@/types';

export interface TariffsProps extends DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  tariffs: TariffsResponse;
}
